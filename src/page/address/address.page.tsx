import { useAddressModel } from "./address.model";
import { AddressView } from "./address.view";

export function AddressPage() {
  const methods = useAddressModel()
  return <AddressView {...methods} />
}