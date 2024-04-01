import React, { createContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut as sign_Out } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase)
// const db = getFirestore(firebase)

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const loadBookmarks = async () => {
  //     try {
  //       const snapshot = await getDocs(collection(db, "bookmarks"));
  //       const elementsData = snapshot.docs.map((doc) => doc.data());
  //       setElements(elementsData);
  //     } catch (error) {
  //       console.error('Error loading elements:', error);
  //     }
  // };

  // const removeBookmark = async (id)=>{
  //   const bookwark = { done: false, text: 'Sample' }
  //   return firestore.collection('todos').add(exampleTodo)
  // }

  // const addBookmark = async (place)=>{
  //   const bookwark = { done: false, text: 'Sample' }
  //   return firestore.collection('todos').add(exampleTodo)
  // }

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (email, password,name,surname) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await user.updateProfile({
        displayName: `${name} ${surname}`
      });
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      await sign_Out(auth);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};