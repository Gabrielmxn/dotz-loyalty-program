import { Product } from "../../../DTOs/products";
import { api } from "../../../lib/axios";

interface GetProductsByIdRequest {
  ids: string[]
}
export async function getProductsById({ids}: GetProductsByIdRequest){
  const response = await api.get<Product[]>(`products`)

  const products = response.data.filter(response => ids.includes(response.id))

  return products
}