import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAwUls_DNiOPfiztV1gKh3-ej1lcCoy9rc",
    authDomain: "appporcina.firebaseapp.com",
    projectId: "appporcina",
    storageBucket: "appporcina.appspot.com",
    messagingSenderId: "617665880468",
    appId: "1:617665880468:web:cc4c1821c8df84cd602f81",
    measurementId: "G-20TCX73P3R"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);

const providerGoogle = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, providerGoogle)
        .then((result) => {
            const { displayName, email, photoURL } = result.user;
            localStorage.setItem("name", displayName);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", photoURL);
        }).catch((error) => {
            console.log(error);
        })
}