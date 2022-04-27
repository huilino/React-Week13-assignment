import React from 'react';

export default class Navigationbar extends React.Component{
    render(){
        return (
         <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
            <a className = "navbar-brand mybrand" href="#">NavBar</a>
              <div className="container-fluid">
                <ul className ="navbar-nav mr-auto">
                  <li className = "nav-item active">
                    <a className ="nav-link" href="#">Home</a>
                  </li>
                  <li>
                    <a className ="nav-link" href="#">About</a>
                  </li>
                  <li>
                    <a className ="nav-link" href="#">Product</a>
                  </li>
                  <li>
                    <a className ="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="input-group">
                <div className="col-sm-4 mycol">
                  <input type="search" className="form-control rounded control" placeholder="Search"/>
                </div>
                  <button type="button" className="btn btn-default search">search</button>
                </div>  
         </nav>
        );
    }
        
}


