import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";
export const HomeContainer = styled.div`
  padding: 1rem;

  @media (min-width: 620px){
    width: 100%;

  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1rem;
  flex: 1;
  }

`
export const ImgProduct = styled.div`
  text-align: center;
`
export const FilterProducts = styled.div`
  height: 100%;
  display: none;
  @media (min-width: 620px){
    display: block;
  }
`

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 620px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  gap: 0.5rem;
`

export const CardProdutc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  gap: 1rem;
  padding: 0.5rem;
  box-shadow: 0 0 2px 0 #000;

  img {
    width: 120px;
    text-align: center;
  }
`

export const CheckboxRoot = styled(Checkbox.Root)`

background-color: white;
	width: 25px;
	height: 25px;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
`


export const FormFilterList = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0;
  gap: 1rem;
`

export const HomeViewContainer = styled.div`
  padding: 0.25rem;
`

export const CartegorySub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 16px;

`

export const CartegoryAndSub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

`