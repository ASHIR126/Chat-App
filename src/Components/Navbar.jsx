import React from 'react'
import SignIn from './SignIn'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import LogOut from './LogOut'

const style = {
    navbar: `bg-gray-800 h-18 flex justify-between items-center p-4`,
    heading: `text-white text-4xl `
}



const Navbar = () => {
    const [user] = useAuthState(auth)

    return (
        <div className={style.navbar}>
            <h1 className={style.heading}>
                Chat App
            </h1>
            {user ? <LogOut /> : <SignIn />}


        </div>
    )
}

export default Navbar