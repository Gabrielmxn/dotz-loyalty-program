import { Plus } from "@phosphor-icons/react"
import { CardAddress } from "../../components/cardAddress/cardAddress"
import { useAddressModel } from "./address.model"
import { AddressContainer, AddressHeader, AddressList, Heading } from "./address.styles"
import { Button } from "../../components/button/button"
import { DialogPage } from "../../components/dialog/dialog.page"

type AddressViewProps = ReturnType<typeof useAddressModel>
export function AddressView(props: AddressViewProps) {
  const { addressList } = props
  console.log(addressList)
  return (
    <AddressContainer>
      <AddressHeader>
        <h2>Meu endereço</h2>
        <DialogPage>
          <Button>
            <Plus />
            Adicionar endereço
          </Button>
        </DialogPage>

      </AddressHeader>
      <AddressList>
        {
          addressList?.map(address => {
            const addressComplet = `${address.street} ${address.number} ${address.complement} ${address.neighborhood}  - ${address.state}  ${address.cep}`
            return (
              <CardAddress id={address.id} address={addressComplet} />
            )
          })
        }
      </AddressList>
    </AddressContainer>
  )
}