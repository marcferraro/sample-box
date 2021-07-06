import React from 'react';
import { connect } from 'react-redux';
import SampleCard from './SampleCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const gridStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));


function SampleContainer(props){
    const gridClasses = gridStyles();
    
    return(
        <Grid container className={gridClasses.root}>
            {/* <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {props.samples.map(sample => (
                        <Grid key={sample.id} item>
                            <SampleCard key={sample.id} sample={sample} />
                        </Grid>
                    ))}
                </Grid>
            </Grid> */}
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        samples: state.samples
    }
}
// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(SampleContainer)