import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const storage = getStorage();

export default db;
