
import { api } from "../../../lib/axios";

interface DeleteAddressRequest {
  id: string
}

export async function deleteAddress({id}: DeleteAddressRequest){
  const response = await api.delete(`address/${id}`)

  return response.data
}