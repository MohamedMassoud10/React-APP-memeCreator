import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Header from "./Header"
import Content from './Content';
function Page() {
  return (
    <div className='.container'>
      <Header />
      <Content/>
    </div>
    
  )
}




ReactDOM.render(<Page/>,document.getElementById("root"))
