import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.25rem;
`

export const InputText = styled.input`
  padding: 0.5rem 0.2rem;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors["color-dotz-dark"]};
`
