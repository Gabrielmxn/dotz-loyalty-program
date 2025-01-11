import { Link } from "react-router";
import styled from "styled-components";

export const NavigateButton = styled(Link)`
  margin-left: 0.25rem;
  text-decoration: none;
  color: ${props => props.theme.colors["color-dotz-pure"]};

  &:hover{
    color:${props => props.theme.colors["color-dotz-dark"]};
    text-decoration: underline;


  }
`