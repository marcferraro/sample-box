import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function SampleContainer(props){

    useEffect(() => {
        console.log("hello")
    })

    return(
        <div>Hello from container</div>
    )
}

const mapStateToProps = state => {
    return {
        samples: state.samples
    }
}
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer)