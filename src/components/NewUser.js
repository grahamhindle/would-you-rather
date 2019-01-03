import React, { Component } from 'react'
import { AppBar, Toolbar, FormGroup,IconButton, TextField, Typography , Button} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {AvatarPicker} from 'material-ui-avatar-picker'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  })
class NewUser extends Component {
    constructor(props){
        super(props)
        this.state={
        name:'',
        username:'',
        password:'',
        img: ''
        }
       }

       handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      }

      render() {
        const { classes } = this.props;
          return (
            <div>
            <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Would you Rather
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          
          <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="user Id"
          className={classes.textField}
          value={this.state.username}
          onChange={this.handleChange('username')}
          margin="normal"
        />
        <div>
       
    </div>
        <TextField
          id="standard-name"
          label="Avatar"
          className={classes.textField}
          value={this.state.img}
          onChange={this.handleChange('avatar')}
          margin="normal"
        />
        
        
            </div>
          );
        }
      }
      const style = {
       margin: 15,
      };
      export default withStyles(styles)(NewUser);