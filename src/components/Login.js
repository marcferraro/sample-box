import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { connect } from 'react-redux'
import { loginSuccess } from '../actions'

// import { Link }  from 'react-router-dom'

const useStyles = makeStyles((theme) => ({

    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function Login(props){
    const [username, setUsername] = useState("")
    const classes = useStyles();

    const handleSubmit = event => {
        event.preventDefault()
        
        const reqObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
              },
            body: JSON.stringify({username: username})
        }

        fetch('http://localhost:3000/login', reqObj)
        .then(resp => resp.json())
        .then(user => {
            if (user.error){
                alert(user.error)
            } else {
                // console.log(user)
                localStorage.setItem('username', user.username)
                props.loginSuccess(user)
                // setUsername("")
            }
        })

        
    }

        return(
            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                <TextField onChange={(event) => setUsername(event.target.value)} value={username} id="outlined-basic" label="Username" variant="outlined" />
                <Button type="submit" variant="contained" color="secondary"endIcon={<ArrowForwardIosIcon />}>Submit</Button>
            </form>
  );
}

const mapDispatchToProps = {
    loginSuccess: loginSuccess
}

export default connect(null, mapDispatchToProps)(Login)
// export default Login