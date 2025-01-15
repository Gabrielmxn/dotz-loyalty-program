import { Link } from "react-router"
import { Button } from "../../components/button/button"
import { Dotz } from "../../components/header/header.styles"
import { useCartModel } from "./cart.model"
import { CartContainer, CartTotal, Container, ContainerProducts, Description, HeadingCart, ImageProduct, LinkToCreateAddress, TrashCart } from "./cart.styles"

type CartViewProps = ReturnType<typeof useCartModel>

export function CartView(props: CartViewProps) {
  const { productsInCart, addressList } = props

  const total = productsInCart?.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)
  return (
    <CartContainer>
      <Container>
        {
          productsInCart?.map(resp => {
            return (
              <ContainerProducts>
                <ImageProduct src={resp.image} alt="" />
                <HeadingCart>{resp.name}</HeadingCart>
                <Description>{resp.description}</Description>
                <Dotz>{resp.value} DOTZ</Dotz>
                <TrashCart />
              </ContainerProducts>
            )
          })
        }

      </Container>
      <CartTotal>
        <h2>Finalizar pedido</h2>
        {
          addressList && addressList?.length > 0 ? (
            <select name="" id="">
              {
                addressList.map(resp => {
                  return (
                    <option value={resp.city}>Endereço</option>
                  )
                })

              }

            </select>
          ) : (
            <div>
              <p>Nenhum endereço cadastrado</p>
              <LinkToCreateAddress to='/address'>
                <p>Cadastre aqui</p>
              </LinkToCreateAddress>
            </div>
          )
        }

        <p>Total: {total} DOTZ</p>
        <Button>
          Comprar
        </Button>
      </CartTotal>
    </CartContainer >
  )
}