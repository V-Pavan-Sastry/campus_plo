
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import {useNavigate } from 'react-router-dom';
const firebaseConfig = {
  apiKey: "AIzaSyAIY1ozDYO5Bg-eHDTxjImAbCxhxA03gss",
  authDomain: "camplace-2639e.firebaseapp.com",
  projectId: "camplace-2639e",
  storageBucket: "camplace-2639e.appspot.com",
  messagingSenderId: "62039004071",
  appId: "1:62039004071:web:a54321866335f008eb5c82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();


export const signInWithGoogle = ()=>{
    const navigate = useNavigate();
    signInWithPopup(auth,provider).then((results)=>{
        console.log(results);
        const name=results.user.displayName;
        const email=results.user.email;
        const imagelink=results.user.photoURL;
        const phno=results.user.phoneNumber;
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("profilepic",imagelink);
        localStorage.setItem("phno",phno);
        
    }).catch((error)=>{
        console.log(error);
    });
    navigate('/dash');
};