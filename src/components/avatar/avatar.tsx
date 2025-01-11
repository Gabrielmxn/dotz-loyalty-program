import { ComponentProps, ReactNode } from "react";
import { AvatarContainer, AvatarItem } from "./avatar.style";

interface AvatarProps extends ComponentProps<'button'> {
  children?: ReactNode
}
export function Avatar({ children, ...rest }: AvatarProps) {
  return (
    <AvatarContainer >
      <AvatarItem {...rest}>
        <img src={'https://github.com/gabrielmxn.png'} alt="" />
      </AvatarItem>
      {children}
    </AvatarContainer>
  )
}