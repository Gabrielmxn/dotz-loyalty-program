import { InferType, object, string  } from "yup";

export const SignInSchema = object({
  email: string().email().required(),
  password: string().required(),
})

export type SignInSchemaType = InferType<typeof SignInSchema>