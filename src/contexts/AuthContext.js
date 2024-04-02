import React, { createContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut as sign_Out } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "modsen-test-4.firebaseapp.com",
  projectId: "modsen-test-4",
  storageBucket: "modsen-test-4.appspot.com",
  messagingSenderId: "178102053009",
  appId: "1:178102053009:web:5297d62c15356b195eb730",
  measurementId: "G-BJGHJ2WG58"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase)
const firestore = getFirestore(firebase)

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

  async function saveBookmark(userId, place) {
    const bookmarksCollection = collection(firestore, 'bookmarks');

    const newPlaceData = {
      userId: userId,
      place: place
    };
    console.log(newPlaceData)
    const docRef = await addDoc(bookmarksCollection, newPlaceData);
    console.log(docRef)
    setBookmarks([...bookmarks, place]);
  }

  async function getBookmarks(userId) {
    const bookmarksCollection = collection(firestore, 'bookmarks');
  
    const q = query(bookmarksCollection, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs)
    console.log(querySnapshot.docs.map((doc)=> doc.data().place))
    setBookmarks(querySnapshot.docs.map((doc)=> doc.data().place));
  }

  async function deleteBookmark(userId,placeId) {
    const bookmarksCollection = collection(firestore, 'bookmarks');
    const q = query(bookmarksCollection, where('userId', '==', userId), where('place.id', '==', placeId));
  
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
    querySnapshot.forEach(async (el) => {
      const placeRef = doc(bookmarksCollection, el.id);
      console.log(el.id)
      await deleteDoc(placeRef);
    });
    setBookmarks(bookmarks.filter(b=>b.id != placeId))
  }

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
      updateProfile(user,{
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
      getBookmarks(user.uid)
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, bookmarks, saveBookmark, deleteBookmark }}>
      {children}
    </AuthContext.Provider>
  );
};