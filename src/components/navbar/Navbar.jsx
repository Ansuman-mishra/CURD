import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <div className="navbar-brand">
                  <i className="fa fa-shopping-cart"></i> AnsumanBlog
               </div>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
               >
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <Link className="nav-link" to="/home">
                           Home <span className="sr-only">(current)</span>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/create-blog">
                           Create Blog{" "}
                           <span className="sr-only">(current)</span>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/blog">
                           Show Blog <span className="sr-only">(current)</span>
                        </Link>
                     </li>
                  </ul>
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item">
                        <Link className="nav-link" to="/">
                           login <span className="sr-only">(current)</span>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/registration">
                           Registration{" "}
                           <span className="sr-only">(current)</span>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/admin">
                           Admin <span className="sr-only">(current)</span>
                        </Link>
                     </li>
                  </ul>
               </div>
            </nav>
         </>
      );
   }
}

export default Navbar;
