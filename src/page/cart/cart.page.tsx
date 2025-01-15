import { useCartModel } from "./cart.model";
import { CartView } from "./cart.view";

export function CartPage() {
  const methods = useCartModel()
  return <CartView {...methods} />
}