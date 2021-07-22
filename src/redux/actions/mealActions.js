import { ActionTypes } from '../constants/action-types'
export const setMeals = (meals) =>
{
    return {
        type: ActionTypes.SET_MEALS,
        payload: meals,
    }
}

export const selectedMeal = (meal) =>
{
    return {
        type: ActionTypes.SELECTED_MEAL,
        payload: meal,
    }
}