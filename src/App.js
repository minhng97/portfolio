import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './pages/HomePage/Home'
import About from './pages/AboutPage/About'

import "./styles.css";
import 'antd/dist/antd.css';



class App extends React.Component {
  render() {
  return (
  
<>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route component={() => <h1 style={{textAlign: "center", color: "red"}}><Link to="/">404 Not found</Link></h1>} />

          </Switch>
        </Router>
</>
  )}
}

export default App