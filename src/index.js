import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";


const page = (
  <div className="container">
    <Header />
    <MainContent />
  </div>
);

ReactDOM.render(page, document.getElementById('root'));