import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD9MLn4np5oLjTLOQx7GGwfAahsTwPmlbM",
    authDomain: "up-now-d7e61.firebaseapp.com",
    projectId: "up-now-d7e61",
    storageBucket: "up-now-d7e61.appspot.com",
    messagingSenderId: "813633858297",
    appId: "1:813633858297:web:171668e4583d3f6d8c1028",
    measurementId: "G-LZ6FHE6K1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

