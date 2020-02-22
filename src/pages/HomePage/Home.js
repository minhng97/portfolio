import React from "react";
import Header from '../Header'
import DesDiv from './DesDiv'
import Footer from '../Footer'
import './home.css'
class HomePage extends React.Component {

  render() {
    return (
      <>
        <Header />
        <DesDiv />
        <Footer />
      </>
    );
  }
}

export default HomePage;
