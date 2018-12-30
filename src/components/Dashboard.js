

import React , { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer'



class Dashboard extends Component {
  
  render() {
  
    return (
        <div>
      
        <Header />

      <Login />
        <Footer />
      </div>
    );
    
  }

             
    
}
export default connect()(Dashboard)