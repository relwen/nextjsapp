import Footer from "./Footer";
import Navbar from "./Navbar";
function MyLayout({ children }) {
    return (

        <div className="container">

            <Navbar />
            {children}

            <Footer/>
        </div>

    );

}

export default MyLayout;