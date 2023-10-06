import {initializeApp} from "firebase/app"
import { getAuth,signInWithPopup,signInWithRedirect,GoogleAuthProvider, signOut } from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCP8VR-nAFl-sehvrFho72wVh-M3Ddom0A",
  authDomain: "crwn-clothing-bd-48251.firebaseapp.com",
  projectId: "crwn-clothing-bd-48251",
  storageBucket: "crwn-clothing-bd-48251.appspot.com",
  messagingSenderId: "432094389920",
  appId: "1:432094389920:web:aaf1f0761ec584e150cbc5",
  measurementId: "G-HDD26PGYZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const firebaseApp=initializeApp(firebaseConfig);
  const provider=new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });
  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);
  export const db=getFirestore();
  export const createDocFromAuth= async(userAuth,info)=>{
    const userDocRef=doc(db,'users',userAuth.uid);
    const userData=await getDoc(userDocRef)
    if(!userData.exists()){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...info
        })
      }catch(error){
        console.log(error);
      }
    }
    return userDocRef;
  }
  export const SignOutUser= async ()=>{signOut(auth)}

