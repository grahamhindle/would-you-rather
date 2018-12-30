import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import './App.css'
import { connect } from 'react-redux'
import { setAuthedUser, SET_AUTHED_USER } from '../actions/authedUser'
import { withStyles } from '@material-ui/core'
import { dispatch } from 'rxjs/internal/observable/range';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

 class Login extends Component {
  constructor(props) {
    super(props);
  }
    
  
  /*componentDidMount(){
    const {dispatch, authedUser} = this.props
    console.log(this.props)
    dispatch(setAuthedUser)({
      id: authedUser,
    })
    
  }
  */
  


  

  handleClick = (event) => {
    dispatch(setAuthedUser(event))

  }

 
render() {
 
  const x = this.props.users.find( user => user.id === this.props.authedUser )
  if (x === undefined || null)
    return  (
      <div>
      </div>
    )
    
    return (
        <div classes= {styles}>
        {this.props.users.map((user) => (
          <ListItem key={user.id} onClick = {( event) => this.props.handleClick(user.id, event)} >
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${user.name + 1}`}
                src={user.avatarURL}
              />
            </ListItemAvatar>
            <ListItemText primary={user.name}/>
            
          </ListItem>
        ))}
         </div> 
        )
        
    }   
}
const mapDispatchToProps = (dispatch) => {
    return {
      handleClick: (id )=>{
        dispatch(setAuthedUser(id))
        }
    } 
  }
function mapStateToProps({ users, authedUser }) {
    console.log('props',authedUser)
    return {
        users: Object.values(users),
        authedUser,
    }
}
export default   connect(mapStateToProps, mapDispatchToProps)(Login)
