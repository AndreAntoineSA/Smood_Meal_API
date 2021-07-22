import { ActionTypes } from "../constants/action-types"

const initialState = {
    meals: { meals: [] }
}
export const mealReducer = (state = initialState, { type, payload }) =>
{
    switch (type)
    {
        case ActionTypes.SET_MEALS:
            return { ...state, meals: payload }
        default:
            return state
    }
}