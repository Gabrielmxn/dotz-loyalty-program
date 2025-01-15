import styled from "styled-components";

export const CardAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 4px;
  box-shadow: 0 0 2px 0px ${props => props.theme.colors["color-dotz-pure"]};
`

export const Heading = styled.h2`
  font-size: 1rem;
`
export const AddressDescription = styled.p`
  font-size: 0.875rem;
`

export const CardAddressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

