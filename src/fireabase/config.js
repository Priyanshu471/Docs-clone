import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwx-I1QDSVeuLpOOCTUGK8QXV2nzI96mQ",
  authDomain: "docs-88e0d.firebaseapp.com",
  projectId: "docs-88e0d",
  storageBucket: "docs-88e0d.appspot.com",
  messagingSenderId: "334132674341",
  appId: "1:334132674341:web:12a064be6e7529dc1464cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
