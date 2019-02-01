import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  position: absolute;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalWrapper = styled.div`
  background: #FFF;
  border-radius: 20px;
  width: 20vw;
  height: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.4);

  @media (max-width: 936px) {
    width: 40vw;
    height: 40vw;
  }

  @media (max-width: 601px) {
    width: 60vw;
    height: 60vw;
  }

  @media (max-width: 494px) {
    width: 80vw;
    height: 80vw;
  }

  @media (max-width: 320px) {
    width: 90vw;
    height: 90vw;
  }
`

export const ModalContent = styled.div`
    padding: 20px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
`

export const ModalTitle = styled(ModalContent)`
    text-transform: uppercase;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    background: #333;
    color: #FFF;
`

export const Button = styled.button`
    border: none;
    background: green;
    color: #fff;
    width: 75px;
    height: 30px;
    border-radius: 20px
`