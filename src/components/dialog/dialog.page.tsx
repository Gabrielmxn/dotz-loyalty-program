import { ReactNode } from "react";
import { DialogForm } from ".";
import { useDialogModel } from "./dialog.model";

interface DialogPageProps {
  children: ReactNode
}
export function DialogPage({ children }: DialogPageProps) {
  const methods = useDialogModel()
  return (
    <DialogForm children={children} {...methods} />
  )
}