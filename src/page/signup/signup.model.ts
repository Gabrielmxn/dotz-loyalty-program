import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { RegisterUserSchema, RegisterUserType } from "./signup.schema"
import { api } from "../../lib/axios"
import { useNavigate } from "react-router"

export function useSignUpModel(){
  const navigate = useNavigate()
  const {register, control, handleSubmit } = useForm<RegisterUserType>({
    resolver: yupResolver(RegisterUserSchema)
  })
/*  "id": "1",
      "name": "Gabriel",
      "email": "gabrielmxn22@gmail.com",
      "password": "123456",
      "phone": "21973727965",
      "create_at": "data" */
  async function handleRegisterUser(data: RegisterUserType){
    try{
      const { name, email, password, phone} = data
      const response = await api.post('/user', {
        name, email, password, phone, create_at: String(new Date()),
      })
  
      console.log(response)

      navigate('/login')
    }catch(err){
      console.log(err)
    }
  }
  return{
    register, control, handleSubmit, handleRegisterUser
  }
}