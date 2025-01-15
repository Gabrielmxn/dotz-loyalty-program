
import { api } from "../../../lib/axios";

interface CreateAddressRequest {
  name: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  cep: string;
  userId: string;
  created_at: Date;
}

export async function createAddress(props: CreateAddressRequest){
  const {cep, city, complement, created_at, neighborhood,number,state, street, userId, name} = props
  const response =  await api.post(`address`, {
    cep, 
    city, 
    complement, 
    created_at, 
    neighborhood,
    number,
    state,
    name, 
    street, 
    userId
  })
  return response.data
}