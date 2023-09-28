import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../../firebase/config";

// const firestore = getFirestore(app);
// console.log(firestore);

// export default async function handler(req, res) {
//   console.log("here");
//   const snapshot = await getDocs(collection(firestore, "custom"));
//   console.log(snapshot);

//   const data = snapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));

//   res.status(200).json(data);
// }

export default (req, res) => {
  throw new Error("API throw error test");
};
