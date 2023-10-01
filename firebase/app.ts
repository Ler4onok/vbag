import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "./config";
// import { getAnalytics } from "firebase/analytics";

// todo: analytics
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const storage = getStorage();
// const analytics = getAnalytics(app);

export default db;
