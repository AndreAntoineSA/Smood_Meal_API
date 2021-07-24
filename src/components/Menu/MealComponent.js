import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { StyledForm, StyledInput, StyledTextArea, StyledButton } from '../../globalStyles'

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
const MealComponent = () =>
{
    const meals = useSelector((state) => state.allMeals.meals.meals)
    // const { strMealThumb, strMeal, strArea, strTags } = meals
    // const { id, title, details } = meals[0]
    const renderList = meals.map((meal) =>
    {
        const { strMealThumb, idMeal, strMeal, strArea, strTags } = meal
        return (
            <Link to={`/meal/${idMeal}`} style={{ textDecoration: 'none' }} >
                <ProductCard key={idMeal}>

                    <ProductImg src={strMealThumb} alt={strMealThumb}></ProductImg>
                    <ProductInfo>
                        <p>{strMeal}</p>
                        <p>{strArea === 'Unknown' ? '' : strArea}</p>
                        <p>{strTags}</p>
                    </ProductInfo>
                </ProductCard >

            </Link>

        )
    })
    return (
        <>
            <StyledForm>
                <StyledInput></StyledInput>
                <StyledButton>Search</StyledButton>
            </StyledForm>
           
            <ProductWrapper>
                {renderList}
            </ProductWrapper>
        </>
    )
}

export default MealComponent
