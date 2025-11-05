
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCSC0jeU9j16xPWuXNk13cYOawRlAYDT54",
  authDomain: "afya-vault-crs.firebaseapp.com",
  databaseURL: "https://afya-vault-crs-default-rtdb.firebaseio.com",
  projectId: "afya-vault-crs",
  storageBucket: "afya-vault-crs.firebasestorage.app",
  messagingSenderId: "198570717231",
  appId: "1:198570717231:web:11293da115584bbcdc96da",
  measurementId: "G-Z40F2ZG60X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
