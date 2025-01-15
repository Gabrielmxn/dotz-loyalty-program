import { Pencil, Trash } from "@phosphor-icons/react";
import { AddressDescription, CardAddressContainer, CardAddressHeader, Heading } from "./cardAddress.styles";
import { colors } from "../../theme/colors";

interface OnDeleteAddressProps {
  id: string
}
interface CardAddressProps {
  id: string
  address: string
  name: string
  onDeleteAddress: ({ id }: OnDeleteAddressProps) => void
}


export function CardAddress({
  id,
  address,
  onDeleteAddress,
  name
}: CardAddressProps) {

  return (
    <CardAddressContainer>
      <CardAddressHeader>
        <Heading>{name}</Heading>
        <div>
          <Trash style={{ cursor: 'pointer' }} size={16} fill={colors["color-dotz-dark"]} onClick={() => onDeleteAddress({
            id
          })} />
        </div>

      </CardAddressHeader>
      <AddressDescription>{address}</AddressDescription>
    </CardAddressContainer >
  )
}