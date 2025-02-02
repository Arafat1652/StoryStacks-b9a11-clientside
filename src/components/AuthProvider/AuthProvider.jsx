import { createContext,  useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import axios from "axios";



const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser =(email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const updateUserProfile=(name, image)=>{
     return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }
    

    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign in google 
 
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    } 
    // sign in with github
    const signInWithGitHub=()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    // logout or signout
    const logOut = async()=>{
        setLoading(true)
       await axios(`${import.meta.env.VITE_API_URL}/logout` , {withCredentials: true})
       return signOut(auth)
        
    }
    
    // observe auth state change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('onchanged auth provider in side use effect',currentUser)
            setLoading(false)
            if(!currentUser){
                axios(`${import.meta.env.VITE_API_URL}/logout` , {withCredentials: true})
                .then(()=>{
                    setUser(null)
                })
            }
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {user, createUser, signInUser, logOut, loading ,signInWithGoogle,signInWithGitHub, updateUserProfile, setUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;