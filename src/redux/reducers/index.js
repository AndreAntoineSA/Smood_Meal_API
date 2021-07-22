import { combineReducers } from 'redux'
import { mealReducer } from './mealReducer'

const reducers = combineReducers({
    allMeals: mealReducer
})

export default reducers