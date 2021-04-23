import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export class UpdateBlog extends Component {
   constructor(props) {
      super(props);
      this.state = {
         selectedBlog: {
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

   componentDidMount() {
      let blobId = this.props.match.params.id;
      // console.log(blobId);
      let dataUrl = `http://127.0.0.1:5000/api/blog/${blobId}`;
      Axios.get(dataUrl)
         .then((res) => {
            this.setState({
               selectedBlog: res.data,
            });
         })
         .catch((error) => {
            this.setState({
               errMessage: error,
            });
         });
   }

   changeInput = (e) => {
      this.setState({
         selectedBlog: {
            ...this.state.selectedBlog,
            [e.target.name]: e.target.value,
         },
      });
   };

   changeImage = async (e) => {
      let imageFile = e.target.files[0];
      let base64Image = await this.base64Image(imageFile);
      this.setState({
         selectedBlog: {
            ...this.state.selectedBlog,
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

      let dataUrl = `http://127.0.0.1:5000/api/blog/${this.state.selectedBlog._id}`;
      Axios.put(dataUrl, this.state.selectedBlog)
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
               <Redirect to={"/admin"} />
            ) : (
               <div className="container mt-4">
                  {/* <pre>{JSON.stringify(this.state.selectedBlog)}</pre> */}
                  <div className="row animated slideInLeft">
                     <div className="col">
                        <h2 className="text-secondary font-weight-bold">
                           Update the Blog
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
                              <p className="h4">Update Blog</p>
                           </div>
                           <div className="card-body">
                              <form onSubmit={this.submitblog}>
                                 <div className="form-group">
                                    <input
                                       type="text"
                                       name="name"
                                       value={this.state.selectedBlog.name}
                                       onChange={this.changeInput}
                                       className="form-control"
                                       placeholder="blog Name"
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
                                          blog Image
                                       </label>
                                       {this.state.selectedBlog.image && (
                                          <img
                                             src={this.state.selectedBlog.image}
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
                                       value={this.state.selectedBlog.price}
                                       onChange={this.changeInput}
                                       className="form-control"
                                       placeholder="Price"
                                    />
                                 </div>
                                 <div className="form-group">
                                    <textarea
                                       name="content"
                                       value={this.state.selectedBlog.content}
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
                                       value={this.state.selectedBlog.info}
                                       onChange={this.changeInput}
                                       className="form-control"
                                       id=""
                                       rows="3"
                                    >
                                       General Information
                                    </textarea>
                                 </div>
                                 <div className="form-group">
                                    <input
                                       type="submit"
                                       className="btn btn-dark btn-sm"
                                       value="UPDATE BLOG"
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

export default UpdateBlog;
