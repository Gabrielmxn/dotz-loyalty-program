import styled from "styled-components";

export const AvatarContainer = styled.button`
  position: relative;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  border: none;
  cursor: pointer;
  border-radius: 9999px;
  background-color: ${props => props.theme.colors["color-dotz-pure"]};

 
`

export const AvatarItem = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
    object-fit: cover;
    border-radius: 9999px;
    color: #fff;
    background-color: ${props => props.theme.colors["color-dotz-dark"]};
`

export const ImageAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9999px;
`