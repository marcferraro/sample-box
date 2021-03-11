import { combineReducers } from 'redux'
import authReducer from './auth'
import samplesReducer from './samples'

const rootReducer = combineReducers({
    auth: authReducer,
    samples: samplesReducer
})

export default rootReducer