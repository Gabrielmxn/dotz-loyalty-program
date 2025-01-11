import { length } from './../../../node_modules/@types/stylis/index.d';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { SignInSchema, SignInSchemaType } from "./signin.schema"
import { api } from "../../lib/axios"
import { useNavigate } from 'react-router';

export const useSignInModel = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, control , formState: {
    errors,
    isSubmitting
  }} = useForm<SignInSchemaType>({
    resolver: yupResolver(SignInSchema)
  })

  async function handleAuthenticateUser(data: SignInSchemaType){
    const {email, password} = data
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(2000);
    const response = await api.get(`user?email=${email}&password=${password}`)
    

    if(response.data.length > 0){
      localStorage.setItem("userId", response.data[0].id)
      console.log(response.data)
      navigate('/')
      return
    }
    console.log(response)
  }
  return {
    register, handleSubmit, control, errors,
    isSubmitting, handleAuthenticateUser
  }
}