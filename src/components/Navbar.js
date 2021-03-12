import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link }  from 'react-router-dom'
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    // menuButton: {
    //   marginRight: theme.spacing(2),
    // },
    title: {
      flexGrow: 1,
    },
  }));

function Navbar(props){
  const classes = useStyles();

  const loggedIn = () => {
    console.log(props.user)
    return (
      <span>
        <Link to="/sample-form" style={{ textDecoration: 'none', color: 'inherit' }}><Button color="secondary">New Sample</Button></Link>
        <Link to="/samples" style={{ textDecoration: 'none', color: 'inherit' }}><Button color="secondary">Samples</Button></Link>
        <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}><Button color="inherit">Logout</Button></Link>
      </span>
    )
  }

  const loggedOut = () => {
    return (
      <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}><Button color="inherit">Login</Button></Link>
    )
  }

  return(
      <div className={classes.root}>
          <AppBar color="primary">
              <Toolbar>
              <Typography variant="h6" className={classes.title}>
                  sampleBox
              </Typography>
                {props.user ? loggedIn() : loggedOut()}
              </Toolbar>
          </AppBar>
          <Toolbar />
      </div>
  )
}

const mapStateToProps = state => {
  return{
    user: state.auth
  }
}

export default connect(mapStateToProps)(Navbar)
