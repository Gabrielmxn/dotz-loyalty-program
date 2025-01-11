import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  background-color: ${props => props.theme.colors["color-dotz-pure"]};
  color: #FFFFFF;
  border-radius: 4px;
  cursor: pointer;  
  transition: background ease-in-out 200ms;

  &:hover{
    background-color: ${props => props.theme.colors["color-dotz-dark"]};
  }
`