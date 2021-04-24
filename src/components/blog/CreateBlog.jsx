import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from "../navbar/Navbar";

class CreateBlog extends Component {
   constructor(props) {
      super(props);
      this.state = {
         blog: {
            name: "",
            image: "",
            price: "",
            content: "",
            info: "",
         },
         isSubmitted: false,
         errMessage: "",
      };
   }

   changeInput = (e) => {
      this.setState({
         blog: {
            ...this.state.blog,
            [e.target.name]: e.target.value,
         },
      });
   };

   changeImage = async (e) => {
      let imageFile = e.target.files[0];
      let base64Image = await this.base64Image(imageFile);
      this.setState({
         blog: {
            ...this.state.blog,
            image: base64Image,
         },
      });
   };

   base64Image = (imageFile) => {
      return new Promise((resolve, reject) => {
         let reader = new FileReader();
         reader.readAsDataURL(imageFile);
         reader.addEventListener("load", () => {
            if (reader.result) {
               resolve(reader.result);
            } else {
               reject("Error Occured");
            }
         });
      });
   };

   submitblog = (e) => {
      e.preventDefault();
      let dataUrl = `http://127.0.0.1:5000/api/blog/`;
      Axios.post(dataUrl, this.state.blog)
         .then((res) => {
            this.setState({
               isSubmitted: true,
            });
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
            {this.state.isSubmitted ? (
               <Redirect to="/blog" />
            ) : (
               <div className="container mt-4">
                  {/* <pre>{JSON.stringify(this.state.blog)}</pre> */}
                  <div className="row animated slideInLeft">
                     <div className="col">
                        <h2 className="text-success font-weight-bold">
                           Create a blog
                        </h2>
                        <p className="lead">
                           Lorem ipsum dolor, sit amet consectetur adipisicing
                           elit. Ducimus hic rem officiis omnis ab aut alias
                           magni maxime eos exercitationem. Nihil consectetur
                           officia ex illo perspiciatis ea. Nihil, ab corporis.
                        </p>
                     </div>
                  </div>
                  <div className="row animated flipInY delay-1s">
                     <div className="col-md-5">
                        <div className="card">
                           <div className="card-header bg-dark text-white">
                              <p className="h4">Create Blog</p>
                           </div>
                           <div className="card-body">
                              <form onSubmit={this.submitblog}>
                                 <div className="form-group">
                                    <input
                                       type="text"
                                       name="name"
                                       value={this.state.blog.name}
                                       onChange={this.changeInput}
                                       className="form-control"
                                       placeholder="Blog Name"
                                    />
                                 </div>
                                 <div className="form-group">
                                    <div className="custom-file">
                                       <input
                                          type="file"
                                          name="image"
                                          onChange={this.changeImage}
                                          className="custom-file-input"
                                          id="customFile"
                                       />
                                       <label
                                          className="custom-file-label"
                                          htmlFor="customFile"
                                       >
                                          Blog Image
                                       </label>
                                       {this.state.blog.image && (
                                          <img
                                             src={this.state.blog.image}
                                             alt="blogimage"
                                             width="40px"
                                             height="40px"
                                          />
                                       )}
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <input
                                       type="number"
                                       name="price"
                                       value={this.state.blog.price}
                                       onChange={this.changeInput}
                                       className="form-control"
                                       placeholder="Blog Price"
                                    />
                                 </div>
                                 <div className="form-group">
                                    <textarea
                                       name="content"
                                       value={this.state.blog.content}
                                       onChange={this.changeInput}
                                       className="form-control"
                                       id=""
                                       rows="3"
                                       placeholder="enter the content You want to display in the blog"
                                    >
                                       Content
                                    </textarea>
                                 </div>
                                 <div className="form-group">
                                    <textarea
                                       name="info"
                                       value={this.state.blog.info}
                                       onChange={this.changeInput}
                                       className="form-control"
                                       id=""
                                       rows="3"
                                       placeholder="enter the information you want to display in the blog website"
                                    >
                                       General Information
                                    </textarea>
                                 </div>
                                 <div className="form-group">
                                    <input
                                       type="submit"
                                       className="btn btn-dark btn-sm"
                                       value="Create Blog"
                                    />
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </>
      );
   }
}

export default CreateBlog;
