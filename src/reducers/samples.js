const samplesReducer = (state=[], action) => {
    switch (action.type){
        case "LOGIN_SUCCESS":
            return [...state, ...action.user.samples]
        default:
            return state
    }
    
}

export default samplesReducer