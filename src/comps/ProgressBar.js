import React ,{useEffect} from 'react';
import useStorage from '../hooks/useStorage';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    useEffect(() => {
        if (url)
        {
            setFile(null);
           }
    }, [url,setFile])
    console.log(progress, url);
    return (
        <motion.div className="progress-bar"
            intial={{ width: 0 }}
            animate={{width:progress+'%'}}
        >

        </motion.div>
    )
}
export default ProgressBar