import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({

    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


function SampleForm(props){
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const [date, setDate] = useState("")
    const [shared, setShared] = useState(false)
    const classes = useStyles();

    const handleSubmit = () =>{

    }

    return(
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                <TextField onChange={(event) => setTitle(event.target.value)} value={title} id="outlined-basic" label="Title" variant="outlined" />
                <TextField onChange={(event) => setTitle(event.target.value)} value={note} id="outlined-basic" label="Note" variant="outlined" />
                <TextField onChange={(event) => setTitle(event.target.value)} value={date} id="outlined-basic" label="Date" variant="outlined" />
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={shared} onChange={() => setShared(!shared)} name="share-sample" />}
                        label="Share Sample?"
                    />
                </FormGroup>
                <Button type="submit" variant="contained" color="secondary"endIcon={<ArrowForwardIosIcon />}>Submit</Button>
        </form>
    )
}

const mapStateToProps = state => {
    return{
        user: state.auth
    }
}

export default connect(mapStateToProps)(SampleForm)