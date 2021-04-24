import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Navbar from "../navbar/Navbar";

class Admin extends Component {
   constructor(props) {
      super(props);
      this.state = {
         blog: [],
         errMessage: "",
      };
   }
   //get all blogs
   componentDidMount() {
      this.getAllblog();
   }

   getAllblog = () => {
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
   };
   //delete blog

   deleteblog = (blogId) => {
      let dataUrl = `http://127.0.0.1:5000/api/blog/${blogId}`;
      Axios.delete(dataUrl)
         .then((res) => {
            this.getAllblog();
         })
         .catch((err) => {
            this.setState({
               errMessage: err,
            });
         });
   };
   render() {
      return (
         <>
            <Navbar />
            <div className="container mt-4">
               <div className="row animated slideInLeft">
                  <div className="col">
                     <h2>Blog Details</h2>
                     <p className="lead">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ducimus hic rem officiis omnis ab aut alias magni
                        maxime eos exercitationem. Nihil consectetur officia ex
                        illo perspiciatis ea. Nihil, ab corporis.
                     </p>
                     <Link to="/create-blog" className="btn btn-primary btn-sm">
                        Create Blog
                     </Link>
                  </div>
               </div>
               <div className="row mt-4 animated zoomIn delay-1s">
                  <div className="col">
                     <table className="table table-hover text-center table-striped table-success">
                        <thead className="bg-dark text-white">
                           <tr>
                              <th>SNO</th>
                              <th>blog</th>
                              <th>Name</th>
                              <th>Price</th>
                              <th>Content</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {this.state.blog.length > 0 ? (
                              <>
                                 {this.state.blog.map((blogs) => {
                                    return (
                                       <tr>
                                          <td>
                                             {blogs._id.substr(
                                                blogs._id.length - 4
                                             )}
                                          </td>
                                          <td>
                                             <img
                                                src={blogs.image}
                                                alt=""
                                                width="70"
                                                height="70"
                                             />
                                          </td>
                                          <td>{blogs.name}</td>
                                          <td>&#8377;{blogs.price}</td>
                                          <td>{blogs.content}</td>
                                          <td>
                                             <Link
                                                to={`/update-blog/${blogs._id}`}
                                                className="btn btn-secondary btn-sm text-white"
                                             >
                                                Update
                                             </Link>
                                             <button
                                                onClick={this.deleteblog.bind(
                                                   this,
                                                   blogs._id
                                                )}
                                                className="btn btn-danger btn-sm text-white"
                                             >
                                                Delete
                                             </button>
                                          </td>
                                       </tr>
                                    );
                                 })}
                              </>
                           ) : (
                              <>
                                 <tr>
                                    <td
                                       colSpan="6"
                                       className="text-danger font-weight-bold"
                                    >
                                       ------------------No record Found PLZ!!
                                       Insert the blogs---------------------
                                    </td>
                                 </tr>
                              </>
                           )}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default Admin;
