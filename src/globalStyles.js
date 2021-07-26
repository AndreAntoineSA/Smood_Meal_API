import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family:'Source Sans Pro', sans-serif;
}

`;

export const Container = styled.div`
 z-index:1;
 width:100%;
 max-width:1300px;
 margin-right: auto;
 margin-left: auto;
 padding-right:50px;
 padding-left:50px;
 
 @media screen and (max-width: 991px){
     padding-right:30px;
 padding-left:30px;
}
`


export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`

export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`

export const StyledButton = styled.button`
  display: block;
  background-color: #141414;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`



export default GlobalStyle