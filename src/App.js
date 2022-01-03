import React,{useState,useEffect} from 'react';
import './App.css';
import Footer from './Footer/footer';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Login from './Login/Login'
import Home from "./Header/Home";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase"
import CheckOut from './Checkout/Checkout';
import Wishlist from './Checkout/Wishlist';
function App() {
   const [{  user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
     
    <div className="App">   
 <BrowserRouter>
  <Routes>
  <Route exact path="/login" element={<Login/>} />
  </Routes>
  <Routes>
	<Route path="/" element={<div> <Header/><Home/><Footer/></div>}/>
  <Route path="/checkout" element={<div> <Header/><CheckOut/><Footer/></div>}/>
  <Route path="/wishlist" element={<div> <Header/><Wishlist /><Footer/></div>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
