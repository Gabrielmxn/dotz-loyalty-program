import { Pencil, Trash } from "@phosphor-icons/react";
import { AddressDescription, CardAddressContainer, CardAddressHeader, Heading } from "./cardAddress.styles";
import { colors } from "../../theme/colors";
import { api } from "../../lib/axios";
interface CardAddressProps {
  id: string
  address: string
}
export function CardAddress({
  id,
  address
}: CardAddressProps) {
  async function handleDeleteAddress(id: string) {
    const response = await api.delete(`address/${id}`)

    return response.data;
  }
  return (
    <CardAddressContainer>
      <CardAddressHeader>
        <Heading>Residencial</Heading>
        <div>
          <Pencil size={16} fill={colors["color-dotz-dark"]} />
          <Trash size={16} fill={colors["color-dotz-dark"]} onClick={() => handleDeleteAddress(id)} />
        </div>

      </CardAddressHeader>
      <AddressDescription>{address}</AddressDescription>
    </CardAddressContainer >
  )
}