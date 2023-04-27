import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import Heading from "./components/Heading";
import Banner from "./components/Banner";
import Topcontainer from "./components/Topcontainer";
import Footer from "./components/Footer";
import Footericon from "./components/Footericon";




function App() {
  
    return (
    <div className="App">
      <div className="bg">
        <div className="container">
        <Header/>  
        <Items/>
        <Heading/>
        <Banner/>
        <Topcontainer/>    
      </div>
      <Footer/>
      <Footericon/>
      
      </div>
     
    </div>
  );
}

export default App;
