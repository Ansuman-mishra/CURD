import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import "./registration.css";
class Registration extends Component {
   constructor(props) {
      super(props);
      this.state = {
         details: {
            firstname: "",
            email: "",
            phone: "",
            password: "",
            lastname: "",
            gender: "",
            age: "",
            confirmpassword: "",
         },
         isSubmitted: false,
         errMessage: "",
      };
   }

   changeInput = (e) => {
      this.setState({
         details: {
            ...this.state.details,
            [e.target.name]: e.target.value,
         },
      });
   };
   submitDetails = (e) => {
      e.preventDefault();
      localStorage.setItem("document", JSON.stringify(this.state.details));
      let dataUrl = `http://127.0.0.1:5000/register`;
      Axios.post(dataUrl, this.state.details)
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
               <Redirect to="/" />
            ) : (
               <div className="container">
                  <form onSubmit={this.submitDetails}>
                     <div className="row register-form">
                        <div className="col-md-6">
                           <div className="form-group">
                              <div>
                                 <label htmlFor="">First Name</label>
                              </div>

                              <input
                                 type="text"
                                 className="form-control col-md-10"
                                 placeholder="First name"
                                 value={this.state.details.firstname}
                                 onChange={this.changeInput}
                                 name="firstname"
                              />
                           </div>
                           <div className="form-group">
                              <div>
                                 <label htmlFor="">E-Mail</label>
                              </div>
                              <input
                                 type="email"
                                 className="form-control col-md-10"
                                 placeholder="Your E-mail"
                                 value={this.state.details.email}
                                 onChange={this.changeInput}
                                 name="email"
                              />
                           </div>
                           <div className="form-group">
                              <div>
                                 <label htmlFor="">Phone Number</label>
                              </div>
                              <input
                                 type="text"
                                 minLength="10"
                                 maxLength="10"
                                 className="form-control col-md-10"
                                 placeholder="Phone Number"
                                 value={this.state.details.phone}
                                 onChange={this.changeInput}
                                 name="phone"
                              />
                           </div>
                           <div className="form-group">
                              <div>
                                 <label htmlFor="">Password</label>
                              </div>
                              <input
                                 type="password"
                                 className="form-control col-md-10"
                                 placeholder="password"
                                 value={this.state.details.password}
                                 onChange={this.changeInput}
                                 name="password"
                              />
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="form-group">
                              <div>
                                 <label htmlFor="">Last Name</label>
                              </div>
                              <input
                                 type="text"
                                 className="form-control col-md-10"
                                 placeholder="last name"
                                 value={this.state.details.lastname}
                                 onChange={this.changeInput}
                                 name="lastname"
                              />
                           </div>
                           <div className="form-group">
                              <div>
                                 <label htmlFor="">Gender</label>
                              </div>

                              <input
                                 type="text"
                                 name="gender"
                                 id=""
                                 className="form-control col-md-10"
                                 onChange={this.changeInput}
                                 value={this.state.details.gender}
                                 checked
                              />
                           </div>
                           <div className="form-group">
                              <div>
                                 <label htmlFor="">Age</label>
                              </div>
                              <input
                                 type="text"
                                 className="form-control col-md-10"
                                 placeholder="Enter your age"
                                 value={this.state.details.age}
                                 onChange={this.changeInput}
                                 name="age"
                              />
                           </div>
                           <div className="form-group">
                              <div>
                                 <label htmlFor="">Confirm Password</label>
                              </div>
                              <input
                                 type="password"
                                 className="form-control col-md-10"
                                 placeholder="Confirm Password"
                                 value={this.state.details.confirmpassword}
                                 onChange={this.changeInput}
                                 name="confirmpassword"
                              />
                           </div>
                           <div className="btnReg">
                              <input
                                 type="submit"
                                 className="btnRegister btn btn1 btn-danger"
                                 value="Register"
                              />
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            )}
         </>
      );
   }
}

export default Registration;
