import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import { Link }  from 'react-router-dom'

const useStyles = makeStyles((theme) => ({

    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Login(){
    const [username, setUsername] = useState("")
    const classes = useStyles();
        return(
            <form className={classes.root} noValidate autoComplete="off">
                <TextField onChange={(event) => setUsername(event.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
  );
}