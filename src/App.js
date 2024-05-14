import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import All_restaurant from "./Components/All_restaurant";
import { Route , Routes } from "react-router-dom";
import Contact_Us from "./Components/Contact_Us";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/all_restaurant" element={<All_restaurant/>}/>
        <Route path="/contact_us" element={<Contact_Us/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
