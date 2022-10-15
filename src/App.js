import React from "react";
import Navbar from "./Components/Navbar";
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Chat from "./Components/Chat";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  secContainer: `flex flex-col h-[90vh] bg-grey-100 mt-10 shadow-xl border relative `,
}

function App() {

  const [user] = useAuthState(auth)
  console.log(user)

  return (
    <div className={style.appContainer}>
      <section className={style.secContainer}>
        <Navbar />
        {user ? <Chat /> :null}
      </section>

    </div>
  );
}

export default App;
