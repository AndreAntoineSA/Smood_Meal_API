import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MealComponent from './MealComponent'
import { setMeals } from '../../redux/actions/mealActions'
import axios from "axios"


const MealList = () =>
{
    const meals = useSelector((state) => state)
    const dispatch = useDispatch()
    // console.log("meals", meals)
    const fetchMeals = async () =>
    {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a').catch((err) =>
        {
            console.log("Err", err)
        });
        // console.log(response.data)
        dispatch(setMeals(response.data))
    }
    useEffect(() =>
    {
        fetchMeals()
    }, [])
    return (
        <div>
            this is meal page
            <MealComponent />
        </div>
    )
}

export default MealList
