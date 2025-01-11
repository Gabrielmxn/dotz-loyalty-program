import styled from "styled-components";

export const AddressContainer = styled.header`

  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const Heading = styled.h2`
  font-size: 1rem;

`

export const AddressList = styled.p`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const AddressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`