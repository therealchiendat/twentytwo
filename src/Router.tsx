import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}