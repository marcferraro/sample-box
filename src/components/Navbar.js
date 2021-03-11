import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link }  from 'react-router-dom'


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

export default function Navbar(){
    const classes = useStyles();

        return(
            <div className={classes.root}>
                <AppBar color="primary">
                    <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        sampleBox
                    </Typography>
                      <Button color="secondary"><Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>New Sample</Link></Button>
                      <Button color="inherit"><Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link></Button>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </div>
        )
}

