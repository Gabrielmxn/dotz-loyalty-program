import { ComponentProps, ReactNode } from "react";
import { AvatarContainer, AvatarItem, ImageAvatar } from "./avatar.style";

interface AvatarProps extends ComponentProps<'button'> {
  children?: ReactNode
  name?: string
}
export function Avatar({ children, name = 'Dotz', ...rest }: AvatarProps) {
  return (
    <AvatarContainer >
      <AvatarItem {...rest}>
        {name[0]}
      </AvatarItem>
      {children}
    </AvatarContainer>
  )
}