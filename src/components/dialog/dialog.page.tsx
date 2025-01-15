import { ReactNode } from "react";

import { useDialogModel } from "./dialog.model";
import { DialogForm } from "./dialog.view";

interface DialogPageProps {
  children: ReactNode
}
export function DialogPage({ children }: DialogPageProps) {
  const methods = useDialogModel()
  return (
    <DialogForm children={children} {...methods} />
  )
}