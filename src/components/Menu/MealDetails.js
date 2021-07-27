import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import {
  selectedMeal,
  removeSelectedMeal,
} from "../../redux/actions/mealActions"
import { FaYoutube } from "react-icons/fa"
import {
  MealContainer,
  MealHeading,
  MealWrapper,
  MealImg,
  MealContent,
} from "./MealComponent.element"

const MealDetails = () => {
  const { idMeal } = useParams()
  const dispatch = useDispatch()
  const meal = useSelector(state => state.meal)
  const {
    strArea,
    strInstructions,
    strMeal,
    strTags,
    strYoutube,
    strMealThumb,
  } = meal.meals[0]

  useEffect(() => {
    const fetchMealDetails = async () => {
      const response = await axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .catch(err => {
          console.log(err)
        })
      dispatch(selectedMeal(response.data))
    }
    fetchMealDetails()
    return () => {
      dispatch(removeSelectedMeal())
    }
  }, [dispatch, idMeal])
  
  return (
    <MealContainer>
      <MealHeading>{strMeal} Detail</MealHeading>
      <MealWrapper>
        <MealImg src={strMealThumb} />
        <MealContent>
          <h3>Instructions</h3>
          <p>{strInstructions}</p>
          <div className="row">
            {strArea !== "Unknown" && (
              <>
                <h3>Area :</h3>
                <p>{strArea}</p>
              </>
            )}
            {strTags && (
              <>
                <h3>Tags :</h3>
                <p>{strTags}</p>
              </>
            )}
            {/* Directs to youTube video of the meal. */}
            <a href={strYoutube} alt={strYoutube}>
              <FaYoutube />
            </a>
          </div>
        </MealContent>
      </MealWrapper>
    </MealContainer>
  )
}

export default MealDetails
