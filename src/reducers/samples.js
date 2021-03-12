const samplesReducer = (state=[], action) => {
    switch (action.type){
        case "LOGIN_SUCCESS":
            return [...state, ...action.user.samples]
        case "ADD_SAMPLE_SUCCESS":
            return [...state, action.sample]
        case "UPDATE_SAMPLE":
            return state.map(sample => sample.id === action.sample.id ? action.sample : sample)
        default:
            return state
    }
    
}

export default samplesReducer