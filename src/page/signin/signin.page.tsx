import { useSignInModel } from "./sigin.model"
import { SignInView } from "./signin.view"

export function SignInPage() {
  const methods = useSignInModel()
  return (
    <SignInView {...methods} />
  )
}