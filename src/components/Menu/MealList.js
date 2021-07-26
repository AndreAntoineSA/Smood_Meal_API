import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import MealComponent from "./MealComponent"
import { setMeals } from "../../redux/actions/mealActions"
import axios from "axios"
import { Container } from "./MealComponent.element"

const MealList = () => {
  const dispatch = useDispatch()
  const fetchMeals = async () => {
    const response = await axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
      .catch(err => {
        console.log("Err", err)
      })
    dispatch(setMeals(response.data))
  }
  useEffect(() => {
    fetchMeals()
  }, [])
  return (
    <Container>
      <MealComponent />
    </Container>
  )
}

export default MealList
