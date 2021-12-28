import React from 'react';
import { auth } from '../firebase/clientApp';

const Account = () => {

    const onSubmit = (e)=>{
        e.preventDefault();
        const fd = new FormData(e.target);
    };

    return (
        <div>

            <form onSubmit={onSubmit}>
                Upload Image
                <input type='file' accept='image/*' name='pic'/>
            </form>
        </div>
    )
}

export default Account;
