import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link }  from 'react-router-dom'
import { deleteSample } from '../actions'

const cardStyles = makeStyles((theme) => ({
    root: {
      width: '500px',
      height: '500px',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

function Sample(props){
    const cardClasses = cardStyles();

    const audioRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    const handleDelete = () => {

      fetch(`http://localhost:3000/samples/${props.sample.id}`, {method: "DELETE"})
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp.message)
        props.history.push('/samples')
        props.deleteSample(props.sample.id)
        //WEIRD bug, where if the history.push was below deleteSample it would redirect to the old sample show page instead!
      })
    }

    useEffect(() => {
      audioEvents()
    })

    const audioEvents = () => {
      audioRef.current.onended = () => {
        setPlaying(false)
      }
    }

    const handlePlay = () => {
      if (audioRef.current.paused){
        setPlaying(true)
        audioRef.current.play()
      } else {
        setPlaying(false)
        audioRef.current.pause()
      }
    }
    
    return(
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Card className={cardClasses.root}>
            <Grid container className={cardClasses.details} direction="column" justify="center" alignItems="center">
                  <CardContent className={cardClasses.content}>
                      <Typography component="h4" variant="h4">
                          {props.sample.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                          {props.sample.note}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                          {props.sample.date}
                      </Typography>
                      <audio src={"http://localhost:3000" + props.sample.sample_url} ref={audioRef}>
                        Your browser does not support the audio element.
                      </audio>
                  </CardContent>
                  <div className={cardClasses.controls}>
                      <IconButton aria-label="previous">
                          <SkipPreviousIcon />
                      </IconButton>
                      <IconButton aria-label="play/pause" onClick={handlePlay}>
                          {playing ? <PauseIcon className={cardClasses.playIcon} /> : <PlayArrowIcon className={cardClasses.playIcon} />}
                      </IconButton>
                      <IconButton aria-label="next">
                          <SkipNextIcon />
                      </IconButton>
                  </div>
                  <span>
                    <Link to={`/sample/edit/${props.sample.id}`} style={{ textDecoration: 'none'}}><Button color="secondary">Edit Sample</Button></Link>
                    <Button onClick={handleDelete} color="secondary">Delete Sample</Button>
                  </span>
              <CardMedia
                  className={cardClasses.cover}
                  image="/static/images/cards/live-from-space.jpg"
                  title="Live from space album cover"
              />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    )
}

const mapStateToProps = state => {
  return {
    sample: state.samples.find(sample => sample.id === state.sample)
  }
}

const mapDispatchToProps = {
  deleteSample: deleteSample
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample)