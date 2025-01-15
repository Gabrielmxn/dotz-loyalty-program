import { ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router";
import styled from "styled-components";

export const HeaderContainer = styled.header`

  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  
`

export const ImgLogo = styled.img`
    width: 75px;
    height: 25px;
`

export const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const Dotz = styled.p`
  color: ${props => props.theme.colors["color-dotz-dark"]};
  font-weight: 500;

`

export const ShoppingCartIcon = styled(ShoppingCart)`

  color: ${props => props.theme.colors["color-dotz-dark"]};
  cursor: pointer;
`

export const LinkCart = styled(Link)`
  position: relative;
`
export const TotalCart = styled.span`
  padding: 0.4rem;
  position: absolute;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -8px;
  right: -8px;
  border-radius: 99999999px;
  font-size: 0.8rem;
  background-color: ${props => props.theme.colors["color-dotz-dark"]};
  color: #fff;
`