import Footer from "/components/Footer.jsx";
import NavBar from "/components/NavBar.jsx";


const Layout = ({ children }) => {
    return (
      <div>
        <div className="2xl:mx-60">
          <NavBar />
          <main>{children}</main>
        </div>
       
        <Footer />
      </div>
    );
};

export default Layout;