import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`
export const MealContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 80vh;

  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
    padding: 20px;
    margin-left: 1;
    margin-right: 1;
    overflow: hidden;
  }
  .row {
    display: flex;
    h3 {
      margin-top: 1rem;
    }
    p {
      font-style: italic;
      text-align: right;
      margin-left: -1rem;
    }
    a {
      margin-top: 0.75rem;
      color: red;
      font-size: 1.8rem;
      cursor: pointer;
    }
  }
`
export const Sort = styled.div`
  margin-left: 1rem;
  margin-top: -5.5rem;

  div {
    color: #fff;
  }
`

export const SearchForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchErrorMessage = styled.div`
  color: red;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`

export const SearchFormWrapper = styled.form`
  width: 50%;
  max-width: 500px;
  display: flex;
  padding: 5px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: -60px;
  margin-bottom: 30px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  background-color: #eee;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 10px 0;
  padding: 20px;
  margin-right: 10px;
  box-sizing: border-box;
`
export const SearchButton = styled.button`
  display: block;
  background-color: #141414;
  color: #fff;
  font-size: 0.9rem;
  margin: 10px 0 10px 0;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`
export const MealContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and(max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`

export const MenuCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`

export const MenuImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #101522;
`

export const MealImg = styled.img`
  width: 600px;
  height: 100%;
  max-height: 80vh;
  border-radius: 10px 0 0 10px;
  background: #000;
`

export const MealWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  max-height: 80vh;
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  border-radius: 10px;
`
export const MealHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin: 2rem;
`


export const MenuInfo = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  h4,p {
    color: #101522;
  }
`