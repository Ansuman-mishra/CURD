import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import "./login.css";
import Navbar from "../navbar/Navbar";
export class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         details: {
            email: "",
            password: "",
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
      let dataUrl = `http://127.0.0.1:5000/login`;
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
               <Redirect to="/Home" />
            ) : (
               <>
                  <div className="global-container">
                     <div className="card login-form">
                        <div className="card-body">
                           <h3 className="card-title text-center">
                              Log in Form
                           </h3>
                           <div className="card-text">
                              {/* <div
                           className="alert alert-danger alert-dismissible fade show"
                           role="alert"
                        >
                           Incorrect username or password.
                        </div>{" "} */}
                              <form onSubmit={this.submitDetails}>
                                 <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                       Email address
                                    </label>
                                    <input
                                       type="email"
                                       className="form-control form-control-sm"
                                       id="exampleInputEmail1"
                                       name="email"
                                       value={this.state.email}
                                       onChange={this.changeInput}
                                    />
                                 </div>
                                 <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">
                                       Password
                                    </label>
                                    <a
                                       href="/"
                                       style={{
                                          float: "right",
                                          fontSize: "12px",
                                       }}
                                    >
                                       Forgot password?
                                    </a>
                                    <input
                                       type="password"
                                       onChange={this.changeInput}
                                       className="form-control form-control-sm"
                                       id="exampleInputPassword1"
                                       value={this.state.password}
                                       name="password"
                                    />
                                 </div>
                                 <input
                                    type="submit"
                                    className="btn btn1 btn-primary btn-block"
                                    value="Sign in"
                                 />
                                 <div className="sign-up">
                                    Don't have an account?{" "}
                                    <a href="/registration">Create One</a>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </>
            )}
         </>
      );
   }
}

export default Login;
