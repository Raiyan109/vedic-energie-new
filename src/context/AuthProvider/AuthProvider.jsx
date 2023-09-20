import React, { createContext,useEffect,useState } from 'react';
import app from '../../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile} from 'firebase/auth';

const auth=getAuth(app)
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser); 
            setLoading(false) ;
        })
        return ()=> unsubscribe()
    },[])
    const authInfo={
                    loading,
                    createUser,
                    updateUser
                    }
                   
                   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;