  
import React, { Fragment } from 'react';

import './App.css';

import Calendar from './Calendar';

function App() {
  return (
    <Fragment>

            <h1 className="title has-text-centered">Calendar</h1>
            <nav className="navbar fixed-top navbar-light bg-light">
            <div className="container-fluid">
            <li><i className="fa fa-arrow-left"></i></li>
            <li><i className="fa fa-arrow-right"></i></li>
            <li><i className="fa fa-close"></i></li>
            <li><i className="fa fa-home"></i></li>
            <li className="one"><input className="form-control me-2" type="search" placeholder="" aria-label="Search"/></li>
          
            
          <form className="d-flex">
            
            <button className="btn btn-outline-success" type="submit"><i className="fa fa-search"></i></button>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          </form>
        </div>
      </nav>
      
        
    
      <div className="container has-text-centered">
        <Calendar />
    
      </div>
      
    </Fragment>
  );
}

export default App;