import React, { useState, useEffect } from 'react';
import { projectStorage ,timestamp,projectFireStore} from '../firebase/config';
import { getStorage, ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { Bytes } from 'firebase/firestore';

import { doc, setDoc } from "firebase/firestore"; 
import { collection, addDoc } from "firebase/firestore"; 


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    
    useEffect(() => {
        //const storageRef = projectStorage.ref(file.name);
        const storage = getStorage();
        
        
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        },(err) => {
                setError(err);
        }, async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            const createdAt = timestamp();
            // const docRef = doc(projectFireStore, 'images', createdAt.toString());
            // await setDoc(docRef, { url, createdAt })
            const docRef = await addDoc(collection(projectFireStore, "images"), { url, createdAt });
            
            setUrl(url);
        }

        )
         
    }, [file])
    return { progress, url, error }; 


}
export default useStorage;