
import './App.css';
import Footer from './Footer/footer';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Header/Home";
function App() {
  return (
    <div className="App">       
<div>
<Header/>
  <Home/>
  </div>
  <Footer />
    </div>
  );
}

export default App;
