const samplesReducer = (state=[], action) => {
    switch (action.type){
        case "LOGIN_SUCCESS":
            return [...state, ...action.user.samples]
        case "ADD_SAMPLE_SUCCESS":
            return [...state, action.sample]
        default:
            return state
    }
    
}

export default samplesReducer