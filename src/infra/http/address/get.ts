import { Address } from "../../../DTOs/address";
import { api } from "../../../lib/axios";

interface GetAddressRequest {
  userId: string
}
export async function getAddress({userId}: GetAddressRequest){
  const response = await api.get<Address[]>(`address?userId=${userId}`)

  return response.data
}