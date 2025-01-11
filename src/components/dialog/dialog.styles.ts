import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
export const DialogRoot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors["color-dotz-dark"]};
`

export const Overlay = styled(Dialog.Overlay)`
	background-color: ${props => props.theme.colors["black-model"]};
  width: 100%;
	position: fixed;
	inset: 0;
	animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const DialogFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`
export const Content = styled(Dialog.Content)`
background-color: white;
	border-radius: 6px;
	box-shadow:
		hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
		hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90vw;
	max-width: 450px;
	max-height: 85vh;
	padding: 25px;
	animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

`

export const FormRowOne = styled.div`
  display: flex;

  gap: 1rem;
`