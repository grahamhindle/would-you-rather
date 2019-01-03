import React  from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { List, ListItemText, Paper} from '@material-ui/core'
import './App.css'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '50%',
    maxWidth: 180,
    backgroundColor: theme.palette.background.paper,
    flex: 'center',
    border: 5,
    
    
  },
});




function Login ({dispatch, users, classes}) {
  console.log(users)
  if ( users === null)
    return (
      <div></div>
    )
    else 
    return  (
        
        <List component="nav">

         {users.map((user) => (
          <ListItem alignItems="flex-start" button={true} key={user.id} onClick={(event) => dispatch(setAuthedUser(user.id))} >
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


  
function mapStateToProps({ users, authedUser }) {
    return {
        users: Object.values(users),
        authedUser: authedUser,
    }
}
export default compose(withStyles(styles),connect(mapStateToProps ))(Login)
