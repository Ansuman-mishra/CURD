import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
// import Navbar from "./components/navbar/Navbar";
import CreateBlog from "./components/blog/CreateBlog";
import Admin from "./components/blog/Admin";
import Blog from "./components/blog/Blog";
import UpdateBlog from "./components/blog/UpdateBlog";
import Registration from "./components/registration/Registration";

function App() {
   return (
      <>
         <Router>
            {/* <Navbar /> */}
            <Switch>
               {localStorage.getItem("document") ? (
                  <>
                     <Route exact path="/home" component={Home} />
                     <Route exact path="/blog" component={Blog} />
                     <Route exact path="/admin" component={Admin} />
                     <Route exact path="/create-blog" component={CreateBlog} />
                     <Route
                        exact
                        path="/update-blog/:id"
                        component={UpdateBlog}
                     />
                  </>
               ) : (
                  <>
                     <Route exact path="/" component={Login} />
                     <Route
                        exact
                        path="/registration"
                        component={Registration}
                     />
                  </>
               )}
            </Switch>
         </Router>
      </>
   );
}

export default App;
