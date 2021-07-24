import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

export const ModalBackground = styled.div`
width: 100%;
height: 100%;
background: rgba(0,0,0,0.8);
position: fixed;
display:flex;
justify-content:center;
align-items:center;
`
export const ModalWrapper = styled.div`
width:700px;
box-shadow: 0 5px 16px rgba(0,0,0,0.2);
background:#fff;
color:#000;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index:10;
border-radius:10px;
`
export const ModalContent = styled.div`
  width:700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  padding:40px;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`