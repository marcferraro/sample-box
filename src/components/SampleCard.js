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
import { Link }  from 'react-router-dom'

const cardStyles = makeStyles((theme) => ({
    root: {
      width: '200px',
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
    const cardClasses = cardStyles();
    // const theme = useTheme();
    // console.log(theme.direction)

    return(
        <Card className={cardClasses.root}>
            <div className={cardClasses.details}>
                <CardContent className={cardClasses.content}>
                    <Typography component="h5" variant="h5">
                        <Link to="/sample" style={{ textDecoration: 'none'}}>{props.sample.title}</Link>
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
            </div>
            <CardMedia
                className={cardClasses.cover}
                image="/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
            />
        </Card>
    )
}

export default Sample