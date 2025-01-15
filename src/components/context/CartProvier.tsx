import { createContext, ReactNode, useState } from "react";
import { toast } from "sonner";

interface ContextCartProps {
  addProduct: (id: string) => void
  products: string[]
}

// eslint-disable-next-line react-refresh/only-export-components
export const ContextCart = createContext<ContextCartProps>({} as ContextCartProps)

interface CartProvierProps {
  children: ReactNode
}
export function CartProvier({ children }: CartProvierProps) {
  const [products, setProducts] = useState<string[]>(() => {
    const response = localStorage.getItem('cart')
    if (response) {
      return JSON.parse(response)
    }

    return []
  })

  function addProductdawdwad(id: string) {

    const response = localStorage.getItem('cart')

    if (response) {

      if (response.includes(id)) {
        toast.info("O item já está no carrinho")
        return
      }
      toast.success("Adicionado com sucesso")
      console.log("daodaw")
      const newData = [
        ...JSON.parse(response),
        id
      ]
      setProducts(state => [...state, id])
      localStorage.setItem('cart', JSON.stringify(newData))

      return
    }
    toast.success("Adicionado com sucesso")
    setProducts(state => [...state, id])
    localStorage.setItem('cart', JSON.stringify([id]))
  }
  return (
    <ContextCart.Provider value={{ products, addProduct: addProductdawdwad }}>
      {children}
    </ContextCart.Provider>

  )

}