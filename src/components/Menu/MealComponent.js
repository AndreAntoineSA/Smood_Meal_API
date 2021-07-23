import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MealComponent = () =>
{
    const meals = useSelector((state) => state.allMeals.meals.meals)
    // const { strMealThumb, strMeal, strArea, strTags } = meals
    // const { id, title, details } = meals[0]
    const renderList = meals.map((meal) =>
    {
        const { strMealThumb, idMeal, strMeal, strArea, strTags } = meal
        return (
            <div key={idMeal}>
                <Link to={`/meal/${idMeal}`}>
                    <h4>{strMeal}</h4>
                    <p>{strArea}</p>
                    <p>{strTags}</p>
                </Link>
                {/* <img src={strMealThumb} ></img> */}

            </div >
        )
    })
    return (
        <>
            {renderList}
        </>
    )
}

export default MealComponent
