import { date, InferType, object, string } from "yup";

export const AddressSchema = object({
  street: string().required(),
  number: string().required(),
  complement: string().optional(),
  neighborhood: string().required(),
  city: string().required(),
  state: string().required(),
  cep: string().required(),
  userId: string().required().default(localStorage.getItem('userId')),
  created_at: date().default(new Date())
})

export type AddressSchemaType = InferType<typeof AddressSchema>