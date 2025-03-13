import Footer from "/components/Footer.jsx";
import NavBar from "/components/NavBar.jsx";


const Layout = ({ children }) => {
    return (
        <div>        
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;