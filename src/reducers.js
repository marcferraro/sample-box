import { combineReducers } from 'redux';

const samplesReducer = (state=[], action) => {
    return state
}

const rootReducer = combineReducers({
    samples: samplesReducer
})

export default rootReducer