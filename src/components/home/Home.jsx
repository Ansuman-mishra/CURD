import React, { Component } from "react";
import video from "../../assets/3384947_16x9.mp4";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <>
            <Navbar />
            {/* <div className="landing_page">
               <div className="wrapper">
                  <div className="d-flex justify-content-center align-items-md-center flex-column content">
                     <h2 className="display-3">
                        <i className="fa fa-shopping-cart" />
                        AnsumanKart
                     </h2>
                     <p className="lead mx-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis nisi molestiae debitis ratione autem esse mollitia
                        ad optio. Perspiciatis amet reiciendis nulla qui quia
                        harum deserunt ex molestias fugit inventore. Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit.
                        Consectetur accusamus assumenda laudantium. Delectus
                        error similique neque mollitia dolorem tempore incidunt
                        velit, reiciendis deserunt cumque, sunt accusamus totam
                        quas a et!
                     </p>
                  </div>
               </div>
            </div> */}
            <div className="container-fluid w-100 h-100">
               <div className="row bg-dark">
                  <div className="col-md-12 ">
                     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                           {/* <ul className="navbar-nav">
                              <li className="nav-item">
                                 <Link className="nav-link" to="/home">
                                    Home{" "}
                                    <span className="sr-only">(current)</span>
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
                                    Show Blog{" "}
                                    <span className="sr-only">(current)</span>
                                 </Link>
                              </li>
                           </ul> */}
                           {/* <ul className="navbar-nav ml-auto">
                              <li className="nav-item">
                                 <Link className="nav-link" to="/admin">
                                    Admin{" "}
                                    <span className="sr-only">(current)</span>
                                 </Link>
                              </li>
                           </ul> */}
                        </div>
                     </nav>
                  </div>
               </div>
               <div className="row">
                  <div className="col">
                     <div className="Cdesign">
                        <video
                           autoPlay
                           loop
                           muted
                           plays-inline="true"
                           className=" Cdesigninner"
                        >
                           <source src={video} type="video/mp4" />
                        </video>
                        <div className="container-fluid d-flex justify-content-center align-items-center h-100 text-capitalize text-white ">
                           <div className="row">
                              <div className="col">
                                 <h2 className="display-3 text-center animated slideInDown">
                                    <i className="fa fa-shopping-cart" />
                                    AnsumanBlog
                                 </h2>
                                 <p className="lead text-center animated slideInUp">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Eveniet perspiciatis eos
                                    eligendi alias. Similique, velit. Quaerat
                                    illum quis, quod fugiat velit fugit vitae
                                    magni similique debitis, officia, magnam
                                    voluptas dolor vel saepe amet assumenda
                                    atque quas facere a ab suscipit!
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default Home;
