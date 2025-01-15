import { Product } from "../../../DTOs/products";
import { api } from "../../../lib/axios";

interface GetProductsRequest {
  filterCategory: string[]
  filterSubCategory: string[]
}
export async function getProducts({filterCategory, filterSubCategory}: GetProductsRequest){
  const category = filterCategory.join(",")
  const subCategory = filterSubCategory.join(",")
  const response = await api.get<Product[]>(`products?category=${category}&subcategory=${subCategory}`)

  return response.data
}