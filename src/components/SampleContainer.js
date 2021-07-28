import React, { useEffect} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import SampleCard from './SampleCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { fetchSampleSuccess } from '../actions/index.js'

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


const SampleContainer = props => {
    const samples = useSelector(state => state.samples)

    useEffect(() => {
            fetch('http://localhost:3000/samples')
            .then(resp => resp.json())
            .then(samples => {
                console.log(samples)
            })
    }, [])

    const gridClasses = gridStyles();
    
    return(
        <Grid container className={gridClasses.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {samples.map(sample => (
                        <Grid key={sample.id} item>
                            <SampleCard key={sample.id} sample={sample} />
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