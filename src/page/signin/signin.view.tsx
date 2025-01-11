import { Input } from "../../components/input/input";
import { SignUpContainer, SignUpContainerForm, SignUpForm, SignUpImg } from "../signup/signup.style";
import logo from '../../assets/logo.png'
import { Button } from "../../components/button/button";
import { useSignInModel } from "./sigin.model";
import { NavigateButton } from "./sigin.styles";

type SignInViewProps = ReturnType<typeof useSignInModel>
export function SignInView(props: SignInViewProps) {
  const { register, handleSubmit, isSubmitting, errors, handleAuthenticateUser } = props
  return (
    <SignUpContainer>
      <SignUpContainerForm>
        <h2>Sign In</h2>
        <SignUpForm onSubmit={handleSubmit(handleAuthenticateUser)}>
          <Input {...register('email')} label="E-mail" placeholder="Digite seu e-mail" />
          <Input {...register('password')} label="Senha" placeholder="Digite sua senha" />
          <Button
            type="submit"
            disabled={isSubmitting}
          >Enviar</Button>
          <div>
            <span>Você não possue uma conta?</span>
            <NavigateButton to={'/signup'}>
              Crie aqui
            </NavigateButton>
          </div>
        </SignUpForm>
      </SignUpContainerForm>
      <SignUpImg>
        <img src={logo} alt="logo" />
      </SignUpImg>
    </SignUpContainer>
  )
}