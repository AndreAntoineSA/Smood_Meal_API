import { combineReducers } from 'redux'
import { mealReducer, selectedMealReducer,contactReducer } from './mealReducer'

const reducers = combineReducers({
    allMeals: mealReducer,
    meal: selectedMealReducer,
    contact:contactReducer,
})

export default reducers