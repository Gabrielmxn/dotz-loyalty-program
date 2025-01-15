import { ComponentProps, forwardRef } from "react"
import { InputContainer, InputText } from "./style"

interface InputProps extends ComponentProps<'input'> {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, ...rest }: InputProps, ref) => {
  return (
    <InputContainer>
      <label htmlFor={label}>{label}</label>
      <InputText id={label} {...rest} ref={ref} />
    </InputContainer>
  )
}) 