

import React , { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Layouts/Header';
import Login from '../components/Login'
import Test from '../components/Test'





class Dashboard extends Component {
  constructor(props){
    super(props)
  }

  
  render() {
    
    if ( this.props.users === null)
    return (
      <div></div>
    )
    else 
    return (
        <div>
        <Header />
        
       
      </div>
    )
  }  
}

function mapStateToProps({ users, questions,authedUser}) {
  return {
      users: Object.values(users),
      questions: Object.values(questions),
      authedUser,
  }
}
export default connect(mapStateToProps)(Dashboard)