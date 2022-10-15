import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from './../firebase';

const style = {
    wrapper: `bg-gray-200 px-4 py-2 hover:bg-gray-100 rounded-sm`
}

const LogOut = () => {

    const signOut= () => {
        signOut(auth)
    }

    return (
        <button onClick={() => auth.signOut()} className={style.wrapper}>
            Logout
        </button>
    )
}

export default LogOut