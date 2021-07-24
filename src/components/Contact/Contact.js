import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setContact } from '../../redux/actions/mealActions'
import { ModalContainer, StyledError } from './Contact.elements'
import { StyledForm, StyledInput, StyledTextArea, StyledButton } from '../../globalStyles'
import Modal from '../Modal/Modal'

const initialState = {
    name: '',
    email: '',
    message: '',
}

const Contact = () =>
{

    const [contactDetails, setContactDetails] = useState(initialState)
    const [errorMessage, setErrorMessage] = useState('')
    const [showModal, setShowModal] = useState(false)

    const dispatch = useDispatch()
    const contact = useSelector((state) => state.contact)
    console.log(contact)

    function openModal()
    {
        setShowModal(prev => !prev)
    }
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        dispatch(setContact(contactDetails))
        if (contactDetails.name && contactDetails.email && contactDetails.message) openModal()
        for (let key in contactDetails)
        {
            if (contactDetails[key] === '')
            {
                setErrorMessage(`You must provide the ${key}`)
                return
            }
        }
        setErrorMessage('');
    }

    const handleInput = e =>
    {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;

        setContactDetails(prev => ({ ...prev, [inputName]: value }));
    };
    return (
        <>
            <ModalContainer>
                <StyledForm onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="name" >Name</label>
                    <StyledInput type="name" placeholder="Name" name="name" value={contactDetails.name}
                        onChange={handleInput}
                    />
                    <label htmlFor="email" >Email</label>
                    <StyledInput type="email" placeholder="Email" name="email" value={contactDetails.email}
                        onChange={handleInput}
                    />
                    <label htmlFor="message" >Message</label>
                    <StyledTextArea type="textarea" name="message" placeholder="Message" value={contactDetails.message}
                        onChange={handleInput}
                    />
                    {errorMessage && (
                        <StyledError>
                            <p>{errorMessage}</p>
                        </StyledError>
                    )}
                    <StyledButton type="submit">Submit</StyledButton>
                </StyledForm>
                <Modal showModal={showModal} setShowModal={setShowModal} contactDetails={contactDetails} />
            </ModalContainer>
        </>

    )
}

export default Contact
