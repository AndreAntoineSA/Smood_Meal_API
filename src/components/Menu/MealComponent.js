import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { BiSort } from "react-icons/bi"
import { calculateIngredient } from "../../lib/Calculate"
import axios from "axios"
import { setMeals } from "../../redux/actions/mealActions"
import {
  SearchForm,
  SearchFormWrapper,
  SearchInput,
  SearchButton,
  SearchErrorMessage,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  Sort,
} from "./MealComponent.element"

const MealComponent = () => {
  const dispatch = useDispatch()

  const [sort, setSort] = useState(true)
  const [searchString, setSearchString] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const meals = useSelector(state => state.allMeals.meals)
  //   useEffect(() => {
  //     // if (sort) {
  //     //   console.log(sort)
  //     //  meals.reverse()
  //     // } else {
  //     //   console.log(sort)
  //     // }
  //     //   meals.reverse()
  //     handleSort(meals)
  //   }, [sort])

  const handleSort = meals => {
    return meals.reverse()
  }
  const renderList = meals.map(meal => {
    const { strMealThumb, idMeal, strMeal, strArea, strTags } = meal
    let totalIngredient = 0
    totalIngredient = calculateIngredient(meal)
    return (
      <Link
        to={`/meal/${idMeal}`}
        style={{ textDecoration: "none" }}
        key={idMeal}
      >
        <ProductCard>
          <ProductImg src={strMealThumb} alt={strMealThumb}></ProductImg>
          <ProductInfo>
            <h4>{strMeal}</h4>
            <div>
              <p>{strArea === "Unknown" ? "" : strArea}</p>
              <p>{strTags}</p>
              <p>Total ingredients : {totalIngredient}</p>
            </div>
          </ProductInfo>
        </ProductCard>
      </Link>
    )
  })

  const fetchMeals = async value => {
    let searchAPI = ""
    if (value.length === 1) {
      searchAPI = `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`
    } else {
      searchAPI = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    }

    const response = await axios.get(`${searchAPI}`).catch(err => {
      console.log("Err", err)
    })
    console.log("res", response.data)
    if (response.data.meals) {
      dispatch(setMeals(response.data))
      setErrorMessage("")
    } else {
      setErrorMessage(`"${value}" Not found`)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetchMeals(searchString)
  }

  const handleInput = e => {
    setSearchString(e.target.value)
  }

  return (
    <>
      <SearchForm>
        <SearchFormWrapper onSubmit={e => handleSubmit(e)}>
          <SearchInput
            type="text"
            name="search"
            value={searchString}
            onChange={handleInput}
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchFormWrapper>

        <Sort>
          <SearchButton
            onClick={() => {
              setSort(!sort)
              handleSort(meals)
            }}
          >
            <div>
              <BiSort />
            </div>
          </SearchButton>
        </Sort>
      </SearchForm>
      {errorMessage && (
        <SearchErrorMessage>
          <p>{errorMessage}</p>
        </SearchErrorMessage>
      )}

      <ProductWrapper>{renderList}</ProductWrapper>
    </>
  )
}

export default MealComponent
