import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { addSample } from '../actions'

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
    const [sampleFile, setSampleFile] = useState(null)
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(sampleFile)
        
        const data = new FormData() 
        console.log(data)
        
        data.append('sample', sampleFile)
        
        data.append("title", title)
        data.append("date", date)
        data.append("note", note)
        data.append("shared", shared)
        data.append("user_id", props.user.id)
        // const infoObj = {
        //     title: title,
        //     note: note,
        //     shared: shared,
        //     userId: props.user.id
        // }

        // data.append("info", infoObj)

        const reqObj = {
            method: "POST",
            body: data
        }

        fetch('http://localhost:3000/samples', reqObj)
        .then(resp => resp.json())
        .then(sample => {
            props.addSample(sample)
            props.history.push(`/sample/${sample.id}`)
        })
    }

    const handleFile = event => {
        setSampleFile(event.target.files[0])
    }

    return(
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                <TextField onChange={(event) => setTitle(event.target.value)} value={title} id="outlined-basic" label="Title" variant="outlined" />
                <TextField onChange={(event) => setNote(event.target.value)} value={note} id="outlined-basic" label="Note" variant="outlined" />
                <TextField onChange={(event) => setDate(event.target.value)} value={date} id="outlined-basic" label="Date" variant="outlined" />
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={shared} onChange={() => setShared(!shared)} name="share-sample" />}
                        label="Share Sample?"
                    />
                </FormGroup>
                <input onChange={handleFile} type="file"  id="upload" />
                <Button type="submit" variant="contained" color="secondary"endIcon={<ArrowForwardIosIcon />}>Submit</Button>
        </form>
    )
}

// accept="audio/*"


const mapStateToProps = state => {
    return{
        user: state.auth
    }
}

const mapDispatchToProps = {
    addSample: addSample
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleForm)