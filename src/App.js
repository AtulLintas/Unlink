import './App.css';
import Footer from './Component/BasicBody/Footer';
import Navbar from './Component/BasicBody/Navbar';
import AboutUs from './Component/BodyContent/AboutUs';
import Banner from './Component/BodyContent/Banner';
import Different from './Component/BodyContent/Different';
import OurServices from './Component/BodyContent/OurServices';

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <OurServices/>
    <AboutUs/>
    <Different/>
    <Footer/>
    </>
 
  );
}

export default App;
