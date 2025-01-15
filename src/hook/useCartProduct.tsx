import { useContext } from "react";
import { ContextCart } from "../components/context/CartProvier";

export function useCartProduct() {
  const data = useContext(ContextCart)

  return {
    ...data
  }
}