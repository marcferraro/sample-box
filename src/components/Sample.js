import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link }  from 'react-router-dom'

const cardStyles = makeStyles((theme) => ({
    root: {
      width: '250px',
      height: '250px',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

function Sample(props){
  // if (!props.sample){
  //   returnprops.history.push('/login')
  // }
    const cardClasses = cardStyles();
    // const theme = useTheme();
    // console.log(theme.direction)

    return(
      <Box display="flex" justifyContent="center">
        <Card className={cardClasses.root}>
            <div className={cardClasses.details}>
                <CardContent className={cardClasses.content}>
                    <Typography component="h5" variant="h5">
                        {props.sample.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.sample.note}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.sample.date}
                    </Typography>
                </CardContent>
                <div className={cardClasses.controls}>
                    <IconButton aria-label="previous">
                        <SkipPreviousIcon />
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={cardClasses.playIcon} />
                    </IconButton>
                    <IconButton aria-label="next">
                        <SkipNextIcon />
                    </IconButton>
                </div>
                <span>
                <Link to={`/sample/edit/${props.sample.id}`} style={{ textDecoration: 'none'}}><Button color="secondary">Edit Sample</Button></Link>
                <Link to={`/sample/${props.sample.id}`} style={{ textDecoration: 'none'}}><Button color="secondary">Delete Sample</Button></Link>
                </span>
            </div>
            <CardMedia
                className={cardClasses.cover}
                image="/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
            />
        </Card>
      </Box>
    )
}

const mapStateToProps = state => {
  // console.log(state.sample)
  return {
    sample: state.samples.find(sample => sample.id === state.sample)
  }
}


export default connect(mapStateToProps)(Sample)