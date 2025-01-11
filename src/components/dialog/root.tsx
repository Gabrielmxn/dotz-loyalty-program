import { ReactNode } from "react";
import { DialogRoot } from "./dialog.styles";
interface RootPorps {
  children: ReactNode
}
export function Root({ children }: RootPorps) {
  return (
    <DialogRoot>
      {children}
    </DialogRoot>
  )
}