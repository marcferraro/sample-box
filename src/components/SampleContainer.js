import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from './Sample';

function SampleContainer(props){

    // useEffect(() => {
    //     console.log("hello")
    // })

    return(
        <div>{props.samples.map(sample => <Sample key={sample.id} sample={sample}/>)}</div>
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