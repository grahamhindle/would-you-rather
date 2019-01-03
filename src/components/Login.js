import React, { Component }  from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { List, ListItemText } from '@material-ui/core'
import './App.css'
import { connect } from 'react-redux'








class Login extends Component {

  handleAuthedUser=(id) => {
    
    console.log('event')
    //dispatch(setAuthedUser(id))
    this.props.close()
  }
  render(){
    console.log(this.props)
    const {close, users} = this.props
  


  console.log(users)
  if ( users === null)
    return (
      <div></div>
    )
    else 
    return  (
        
        <List component="nav">

         {users.map((user) => (
          < ListItem
            button={true}
            key={user.id}
            onClick={(event) => this.props.close } 
          >
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${user.name + 1}`}
                src={user.avatarURL}
              />
            </ListItemAvatar>
            <ListItemText primary={user.name}/>
          </ListItem>
        ))}
        </List>
      
        
        )
         }  
    }   


  
function mapStateToProps({ users, authedUser }) {
    return {
        users: Object.values(users),
        authedUser: authedUser,
    }
}
export default connect(mapStateToProps )(Login)
