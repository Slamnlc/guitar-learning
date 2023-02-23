import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Plunk from "./Components/Plunk";
import Footer from "./Components/Footer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/plunk" element={<Plunk/>}/>
        <Route path="/" element={<Plunk/>}/>
      </Routes>
      <ToastContainer autoClose={5000} theme="colored"/>
      <Footer/>
    </>
  );
}

export default App;
