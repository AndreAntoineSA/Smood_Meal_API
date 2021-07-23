import { combineReducers } from 'redux'
import { mealReducer, selectedMealReducer } from './mealReducer'

const reducers = combineReducers({
    allMeals: mealReducer,
    meal: selectedMealReducer
})

export default reducers