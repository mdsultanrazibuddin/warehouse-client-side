
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAC3dDXCLoGZzhvEwV5MyiMLM3BVqqrOUk",
  authDomain: "warehouse-management-web-c8495.firebaseapp.com",
  projectId: "warehouse-management-web-c8495",
  storageBucket: "warehouse-management-web-c8495.appspot.com",
  messagingSenderId: "1089110944846",
  appId: "1:1089110944846:web:56421a8687b4f7137ce71f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;