import React, { useState } from 'react';
import ProgressBar from './ProgressBar';



const UploadForm = () => {
    const types = ['image/png', 'image/jpeg'];
    const [file, setFile] = useState(null);
    const [error, seterror] = useState(null);
    
    const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type))
    {
        setFile(selected);
        seterror('');
    }
    else {
        setFile(null);
        seterror('please selected the valid file  (png/jpeg)');

    }
}
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>

            </label>
            
            <div className="output">
                {error && <div className="error"> {error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar setFile={setFile} file={file} />}
            </div>
        </form>
    )
}
export default UploadForm;  