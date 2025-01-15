import { Trash } from "@phosphor-icons/react";
import { Link } from "react-router";
import styled from "styled-components";

export const Container = styled.div`
 display: grid;
 grid-template-rows: 1fr 1fr 1fr;
  gap: 0.4rem;
  overflow-y: scroll;
  padding: 1rem;
  max-height: calc(100vh - 100px);
  height: 100%;
  scrollbar-width: none;
`

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  
 
  gap: 0.4rem;
  
`

export const ImageProduct = styled.img`
  width: 60px;
`

export const HeadingCart = styled.h2`
  font-size: 1rem;
`

export const Description = styled.p`
font-size: 0.875rem;
`



export const ContainerProducts = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  box-shadow: 0 0 4px 0 #000;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 4px;

`

export const CartTotal = styled.div`


`

export const TrashCart = styled(Trash)`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const LinkToCreateAddress = styled(Link)`
  color: ${props => props.theme.colors["color-dotz-dark"]};
`