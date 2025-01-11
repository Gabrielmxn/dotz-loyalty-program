import { useSignUpModel } from "./signup.model"
import { SignUpView } from "./signup.view"

export function SignUpPage() {
  const methods = useSignUpModel()
  return (
    <SignUpView {...methods} />
  )
}