const samplesReducer = (state=[], action) => {
    switch (action.type){
        case "LOGIN_SUCCESS":
            return [...state, ...action.user.samples]
        case "ADD_SAMPLE_SUCCESS":
            return [...state, action.sample]
        case "UPDATE_SAMPLE":
            return state.map(sample => sample.id === action.sample.id ? action.sample : sample)
        case "DELETE_SAMPLE":
            return state.filter(sample => sample.id !== action.sampleId)
        default:
            return state
    }
    
}

export default samplesReducer