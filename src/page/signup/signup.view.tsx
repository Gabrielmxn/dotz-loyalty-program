
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { useSignUpModel } from "./signup.model";
import { SignUpContainer, SignUpContainerForm, SignUpForm, SignUpImg } from "./signup.style";
import logo from '../../assets/logo.png'
import { NavigateButton } from "../signin/sigin.styles";
type SignUpViewProps = ReturnType<typeof useSignUpModel>
export function SignUpView(props: SignUpViewProps) {
  const { register, handleSubmit, handleRegisterUser } = props
  return (
    <SignUpContainer>
      <SignUpImg>
        <img src={logo} alt="logo" />
      </SignUpImg>
      <SignUpContainerForm>
        <h2>Sign Up</h2>
        <SignUpForm onSubmit={handleSubmit(handleRegisterUser)}>
          <Input {...register('name')} label="Nome" placeholder="Informe seu nome" />
          <Input {...register('email')} type="email" label="E-mail" placeholder="Informe seu e-mail" />
          <Input {...register('password')} type="password" label="Senha" placeholder="Informe sua melhor senha" />
          <Input {...register('phone')} label="Telefone" placeholder="Informe seu telefone" />
          <Button type="submit">Enviar</Button>

          <div>
            <span>Você possue uma conta?</span>
            <NavigateButton to={'/login'}>
              Acesse aqui
            </NavigateButton>
          </div>
        </SignUpForm>
      </SignUpContainerForm>
    </SignUpContainer>
  )
}