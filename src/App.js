import "./App.css";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import All_restaurant from "./pages/All_restaurant";
import { Route, Routes } from "react-router-dom";
import Contact_Us from "./pages/Contact_Us";
import Index from "./pages/index"
import About from "./pages/About";
import UserList from "./pages/Chef";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all_restaurant" element={<All_restaurant />} />
        <Route path="/contact_us" element={<Contact_Us />} />
        <Route path="/index" element={<Index />} />
        <Route path="/About" element={<About />} />
        <Route path="/UserList" element={<UserList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
