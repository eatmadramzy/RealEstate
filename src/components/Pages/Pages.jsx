import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";

import Services from "../service/Services";
import Blog from "../blog/Blog";
import Pricing from "../pricing/Pricing";
import Contact from "../contact/Contact";
const Pages=()=>{
    return(
        <>
       
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/blog"  element={<Blog/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/contact" element={<Contact/>}/>
            
          
        </Routes>
        </BrowserRouter>
        </>

       
        
    )
}
export default Pages;
