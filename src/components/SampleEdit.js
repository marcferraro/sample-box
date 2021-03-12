import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { updateSample } from '../actions'

const useStyles = makeStyles((theme) => ({

    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function Sample(props){
    const [title, setTitle] = useState(props.sample.title)
    const [note, setNote] = useState(props.sample.note)
    const [date, setDate] = useState(props.sample.date)
    const [shared, setShared] = useState(props.sample.shared.includes("true") ? true : false)
    const [sampleFile, setSampleFile] = useState(null)
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData() 
        
        // data.append('sample', sampleFile)
        
        data.append("title", title)
        data.append("date", date)
        data.append("note", note)
        data.append("shared", shared)

        const reqObj = {
            method: "PATCH",
            body: data
        }

        fetch(`http://localhost:3000/samples/${props.sample.id}`, reqObj)
        .then(resp => resp.json())
        .then(sample => {
            props.updateSample(sample) 
            props.history.push(`/sample/${sample.id}`)
        })


    }

    const handleFile = event => {
        setSampleFile(event.target.files[0])
    }

    return(
        <Box display="flex" justifyContent="center">
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
        </Box>
    )
}

const mapStateToProps = state => {
  // console.log(state.sample)
  return {
    sample: state.samples.find(sample => sample.id === state.sample)
  }
}

const mapDispatchToProps = {
    updateSample: updateSample
}


export default connect(mapStateToProps, mapDispatchToProps)(Sample)