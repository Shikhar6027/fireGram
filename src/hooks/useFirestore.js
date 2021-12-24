import React, { useState, useEffect } from 'react';
import { projectFireStore } from '../firebase/config';
import { doc, onSnapshot,collection, orderBy,query } from "firebase/firestore";

const useFirestore = (collect) => {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
        const q = query(collection(projectFireStore,collect),orderBy('createdAt','desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            let documents = [];
//   snapshot.docChanges().forEach((change) => {
//     documents.push({...change.doc,id:change.doc.id})
            snapshot.docs.forEach((doc) => {
        //console.log(doc.data);
    documents.push({...doc.data(),id:doc.id})
  });
            setDocs(documents);
        });
        return () => unsubscribe();


    },[collection])
    return { docs };
}
export default useFirestore;