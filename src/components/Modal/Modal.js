import React, { useRef, useEffect, useCallback } from 'react'
import { ModalBackground, ModalWrapper, ModalContent, CloseModalButton } from './Modal.elements'

const Modal = ({ showModal, setShowModal, contactDetails }) =>
{
    const modalRef = useRef();

    const closeModal = e =>
    {
        if (modalRef.current === e.target)
        {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e =>
        {
            if (e.key === 'Escape' && showModal)
            {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () =>
        {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );
    return (
        <>
            {
                showModal ?
                    <ModalBackground onClick={closeModal} ref={modalRef}>
                        <ModalWrapper>
                            <ModalContent>
                                <h1>Thank you {contactDetails.name} for contacting us</h1>
                                <p>Your message "{contactDetails.message}" has been received.</p>
                                <p>We will contact you soon. Check your mail box {contactDetails.email} for more information.</p>
                            </ModalContent>
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setShowModal(prev => !prev)}
                            />
                        </ModalWrapper>
                    </ModalBackground >
                    : null
            }
        </>


    )
}

export default Modal
