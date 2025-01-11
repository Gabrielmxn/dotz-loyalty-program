import styled from "styled-components";
import { Button } from "../button/button";

export const MenuContainer = styled.div`
  position: absolute;
  top: 40px;
  padding: 1rem;
  border-radius: 4px;
  width: 120px;
  cursor: default;
  background-color: ${props => props.theme.colors["color-dotz-dark"]};
`

export const MenuList = styled.ul`
  list-style: none;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const MenuListItem = styled.ul`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #FFF;
  }
`

export const SignOut = styled(Button)`
`