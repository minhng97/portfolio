import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./pages/HomePage/Home"
import About from "./pages/AboutPage/About"
import MyWorks from "./pages/MyWorksPage/MyWorks";
import Contact from "./pages/ContactPage/Contact"

import "./styles.css";
import 'antd/dist/antd.css';
import HeaderComponent from "./pages/Header";
import FooterComponent from "./pages/Footer";



class App extends React.Component {
  render() {
    return (

      <>
        <Router>
          <HeaderComponent />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/myworks" exact component={MyWorks} />
            <Route path="/contact" exact component={Contact} />

            <Route component={() => <p style={{ textAlign: "center", color: "red", fontSize: "2rem" }}><Link to="/">404 Not found</Link></p>} />

          </Switch>
          <FooterComponent />

        </Router>
      </>
    )
  }
}

export default App