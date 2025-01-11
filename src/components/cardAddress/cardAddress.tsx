import { Pencil, Star, Trash } from "@phosphor-icons/react";
import { AddressDescription, CardAddressContainer, CardAddressHeader, Heading } from "./cardAddress.styles";
import { colors } from "../../theme/colors";
interface CardAddressProps {
  id: string
  address: string
}
export function CardAddress({
  id,
  address
}: CardAddressProps) {
  return (
    <CardAddressContainer>
      <CardAddressHeader>
        <Heading>Residencial</Heading>
        <div>
          <Pencil size={16} fill={colors["color-dotz-dark"]} />
          <Trash size={16} fill={colors["color-dotz-dark"]} />
        </div>

      </CardAddressHeader>
      <AddressDescription>{address}</AddressDescription>
    </CardAddressContainer >
  )
}