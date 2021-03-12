const sampleReducer = (state=null, action) => {
    switch (action.type){
        case "ADD_SAMPLE_SUCCESS":
            return action.sample.id
        case "SELECT_SAMPLE":
            return action.sample.id
        case "UPDATE_SAMPLE":
            return action.sample.id
        default:
            return state
    }
    
}

export default sampleReducer