import styled from "styled-components";

export const SignUpContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;

`


export const SignUpImg = styled.div`
display: none;
@media (min-width: 864px){
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors["color-dotz-pure"]};
  }
 
`

export const SignUpContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex: 1;
  padding: 0.5rem;
`
export const SignUpForm = styled.form`
  border-radius: 4px;
  display: flex;
  max-width: 420px;
  width: 100%;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 0 1px 0px #000000;

`

