import { UserContext } from "../Contexts/UserContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
function MyLayout({ children }) {

    const [user,setUser]=useState(null);

    return (

        <UserContext.Provider value={{user,setUser}}>

            <div className="container">

                <Navbar />
                {children}

                <Footer />
            </div>
        </UserContext.Provider>

    );

}

export default MyLayout;