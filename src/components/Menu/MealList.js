import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MealComponent from './MealComponent'
import { setMeals } from '../../redux/actions/mealActions'
import { Container } from '../../globalStyles'
import axios from "axios"

import
{
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './MealComponent.element';


const MealList = () =>
{
    const meals = useSelector((state) => state)
    const dispatch = useDispatch()
    // console.log("meals", meals)
    const fetchMeals = async () =>
    {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c').catch((err) =>
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
        <ProductsContainer>
            
            <MealComponent />
        </ProductsContainer>
    )
}

export default MealList
