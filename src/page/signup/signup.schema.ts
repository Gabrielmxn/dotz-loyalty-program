import { InferType, object, string } from "yup";

export const RegisterUserSchema = object().shape({
  name: string().required(),
  email: string().email(),
  password: string(),
  phone: string()
}) 

export type RegisterUserType = InferType<typeof RegisterUserSchema>