import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedMeal, removeSelectedMeal } from '../../redux/actions/mealActions'
const MealDetails = () =>
{
    const { idMeal } = useParams()
    const dispatch = useDispatch()
    const meal = useSelector((state) => state.meal)
    const { strArea, strInstructions, strMeal, strTags, strYoutube } = meal.meals[0]
    // console.log(meal.meals[0] !== '' ? meal.meals[0] : 'empty')
    const fetchMealDetails = async () =>
    {
        // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52768
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`).catch(err =>
        {
            console.log(err)
        })
        dispatch(selectedMeal(response.data))
    }

    useEffect(() =>
    {
        fetchMealDetails()
        return () =>
        {
            dispatch(removeSelectedMeal())
        }
    }, [idMeal])
    return (
        <div>
            <h1>{strMeal} Detail</h1>
            <h3>Area</h3>
            <p>{strArea}</p>
            <h3>Instructions</h3>
            {/* const {strArea, , strMeal, strTags, strYoutube} = meal[0] */}

            <p>{strInstructions}</p>
            <h3>Tags</h3>
            <p>{strTags}</p>
            <h3>Youtube</h3>
            <p>{strYoutube}</p>

        </div>
    )
}

export default MealDetails
