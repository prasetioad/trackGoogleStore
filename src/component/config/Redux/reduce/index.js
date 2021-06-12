import { combineReducers } from 'redux'
import storeReduce from './store'

const rootReducer = combineReducers({
    store : storeReduce,
})

export default rootReducer