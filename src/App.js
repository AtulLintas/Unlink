import "./App.css";
import Footer from "./Component/BasicBody/Footer";
import Navbar from "./Component/BasicBody/Navbar";
import AboutUs from "./Component/BodyContent/AboutUs";
import Banner from "./Component/BodyContent/Banner";
import Different from "./Component/BodyContent/Different";
import OurServices from "./Component/BodyContent/OurServices";

function App() {
  return (
    <>
    <div className="app_content">
      <Navbar />
      <Banner />
      <OurServices />
      <AboutUs />
      <Different />
      <Footer />
      
      </div>
      <div className="app_h1">
      <h1 >Coming soon...<br/><br/>Phone & Desktop Only</h1>
      </div>
    </>
  );
}

export default App;
