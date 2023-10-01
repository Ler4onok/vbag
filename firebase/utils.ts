import { getDownloadURL, uploadBytes } from "firebase/storage";
import { ref } from 'firebase/storage';
import db, { storage } from "./app";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { CustomFormInputs } from "@components/Form";

// upload file from custom form to firebase storage and return the link to the image
export const uploadFile = async (file: Blob) => {
    const imageRef = ref(storage, `images/${file?.name}`);
    await uploadBytes(imageRef, file);
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
};

// add data about custom design from the form to firebase firestore
export const addCustomDesign = async (data: CustomFormInputs) => {
    await addDoc(collection(db, "custom"), data);
};

// get all documents from the collection
export const getDocuments = async (name: string) => {
    await getDocs(collection(db, name))
};
