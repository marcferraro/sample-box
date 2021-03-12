import { combineReducers } from 'redux'
import authReducer from './auth'
import samplesReducer from './samples'
import sampleReducer from './sample'

const rootReducer = combineReducers({
    auth: authReducer,
    samples: samplesReducer,
    sample: sampleReducer
})

export default rootReducer