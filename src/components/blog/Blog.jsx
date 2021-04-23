import React, { Component } from "react";
import Axios from "axios";
import Navbar from "../navbar/Navbar";

class Blog extends Component {
   constructor(props) {
      super(props);
      this.state = {
         blog: [],
         errMessage: "",
      };
   }

   componentDidMount() {
      let dataUrl = `http://127.0.0.1:5000/api/blog`;
      Axios.get(dataUrl)
         .then((res) => {
            this.setState({
               blog: res.data,
            });
         })
         .catch((err) => {
            this.setState({
               errMessage: err,
            });
         });
   }
   render() {
      return (
         <>
            <Navbar />
            <div className="container mt-4">
               <div className="row animated slideInLeft">
                  <div className="col">
                     <h2>blogs List</h2>

                     <p className="lead">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ducimus hic rem officiis omnis ab aut alias magni
                        maxime eos exercitationem. Nihil consectetur officia ex
                        illo perspiciatis ea. Nihil, ab corporis.
                     </p>
                  </div>
               </div>
               <div className="row animated zoomIn delay-1s">
                  {this.state.blog.length > 0 ? (
                     <>
                        {this.state.blog.map((blogs) => {
                           return (
                              <div className="col-md-3">
                                 <div className="card">
                                    <div className="card-header text-center bg-white">
                                       <img
                                          src={blogs.image}
                                          alt=""
                                          width="150"
                                          height="150"
                                       />
                                    </div>
                                    <div className="card-body">
                                       <ul className="list-group">
                                          <li className="list-group-item">
                                             {" "}
                                             Name : {blogs.name}
                                          </li>
                                          <li className="list-group-item">
                                             {" "}
                                             Price : Rs
                                             {blogs.price.toFixed(2)}
                                          </li>
                                          <li className="list-group-item">
                                             {" "}
                                             content : {blogs.content}
                                          </li>
                                          <li className="list-group-item">
                                             {" "}
                                             info : {blogs.info}
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                     </>
                  ) : null}
               </div>
            </div>
         </>
      );
   }
}

export default Blog;
