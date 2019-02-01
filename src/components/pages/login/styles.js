import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  ${({ image }) => `background: linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${image}') no-repeat;`}
`
export const Form = styled.form`
  height: 20vw;
  width: 25vw;
  background: #fff;
  box-shadow: 1px 2px 4px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
export const FormContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
export const Input = styled.input`
  width: 77%;
  height: 46px;
  border: 1px solid rgba(0,0,0,0.1);
  margin-bottom: 10px;
  padding-left: 10px;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
`

export const Button = styled.button`
  width: 78%;
  height: 53px;
  background: #3f51b5;
  color: #FFF;
  border: 3px solid #d3e0f5;
  text-transform: uppercase;
  :hover {
    background: #96a5f7;
    border: 3px solid 3f51b5;
    transition: 0.4s;
  }
`