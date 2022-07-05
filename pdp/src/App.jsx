import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import "remixicon/fonts/remixicon.css";
import "./index.scss";
import PDPContent from "./PDPContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => (
  <BrowserRouter>
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>

    <div className="my-10" >
      <Routes>
        <Route path="/product/:id" element={ <PDPContent/>}/>
        
     
      </Routes>
      <Footer/>
    </div>
    
    
  </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));