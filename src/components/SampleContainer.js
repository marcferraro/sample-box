import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function SampleContainer(props){

    useEffect(() => {
        console.log("hello")
    })

    return(
        <div>{console.log(props.samples)}</div>
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