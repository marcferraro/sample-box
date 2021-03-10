import React from 'react';
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
    const classes = useStyles();
        return(
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
  );
}