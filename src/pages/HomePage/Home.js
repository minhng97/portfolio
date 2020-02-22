import React from "react";



import HeaderComponent from '../Header'
import DesDiv from './DesDiv'
import FooterComponent from '../Footer'
import './home.css'


class HomePage extends React.Component {

  render() {
    return (
      <>
   
        <HeaderComponent />
        
        
        <DesDiv />
       

      
        <FooterComponent />
     
      </>
    );
  }
}

export default HomePage;
