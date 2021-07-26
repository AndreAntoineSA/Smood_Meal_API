import React from 'react'
import { FooterContainer, FooterText } from './Footer.elements'

const Footer = () =>
{
    return (
        <FooterContainer>
            <FooterText>
                {process.env.REACT_APP_NAME} Meals © 2021
            </FooterText>
        </FooterContainer>
    )
}

export default Footer
