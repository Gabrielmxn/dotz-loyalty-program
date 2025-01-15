import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { ContextCart } from "../../components/context/CartProvier"
import { getProductsById } from "../../infra/http/products/getProdutcById"
import { getAddress } from "../../infra/http/address/get"

export function useCartModel() {
  const { products} = useContext(ContextCart)
  const {data: productsInCart } = useQuery({
     queryKey: products,
     queryFn: () => getProductsById({
      ids: products
     })
  })

  const userId = localStorage.getItem("userId") || ''

  const { data: addressList } = useQuery({
    queryKey: ['address', localStorage.getItem("userId")],
    queryFn: () => getAddress({
      userId
    })
  })
  return {
    productsInCart, addressList
  }
}