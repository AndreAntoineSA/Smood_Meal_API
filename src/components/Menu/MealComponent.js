import React, { useState } from "react"
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
  MenuWrapper,
  MenuCard,
  MenuImg,
  MenuInfo,
  Sort,
} from "./MealComponent.element"

const MealComponent = () => {
  const dispatch = useDispatch()

  const [sort, setSort] = useState(true)
  const [searchString, setSearchString] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const meals = useSelector(state => state.allMeals.meals)

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
        <MenuCard>
          <MenuImg src={strMealThumb} alt={strMealThumb}></MenuImg>
          <MenuInfo>
            <h4>{strMeal}</h4>
            <div>
              <p>{strArea === "Unknown" ? "" : `Origin: ${strArea}`}</p>
              <p>Total ingredients : {totalIngredient}</p>
              <p className="tags">{strTags}</p>
            </div>
          </MenuInfo>
        </MenuCard>
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
        {/* Sort's the Menu Display in ascending or descending */}
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
      {/* Display's error message when result for search is not found */}
      {errorMessage && (
        <SearchErrorMessage>
          <p>{errorMessage}</p>
        </SearchErrorMessage>
      )}
      {/* Wrapper displays all the menu items */}
      <MenuWrapper>{renderList}</MenuWrapper>
    </>
  )
}

export default MealComponent
