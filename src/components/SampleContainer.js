import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from './Sample';
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
        <Grid container className={gridClasses.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {/* {props.samples.map(sample => <Sample key={sample.id} sample={sample}/>)} */}
                    {props.samples.map(sample => (
                        <Grid key={sample.id} item>
                            <Sample key={sample.id} sample={sample} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
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