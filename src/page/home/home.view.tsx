import { useHomeModel } from "./home.model";
import { CardProdutc, CartegoryAndSub, CartegorySub, CheckboxRoot, FilterProducts, FormFilterList, HomeContainer, HomeViewContainer, ImgProduct, ProductsList } from "./home.styles";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "@phosphor-icons/react";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
type HomeViewProps = ReturnType<typeof useHomeModel>

export function HomeView(props: HomeViewProps) {
  const { productsList, addProduct, handleCategorias, categoriass, handleSubCategorias } = props
  return (
    <HomeViewContainer>
      <Input placeholder="Busca" type="text" />
      <HomeContainer>
        <FilterProducts>
          <h3>Categorias</h3>
          <div>
            <FormFilterList>
              {
                Object.entries(categoriass).map(([categorym, subcategorias]) => {

                  return (
                    <CartegoryAndSub key={categorym}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <CheckboxRoot onClick={(event) => handleCategorias({
                          verifyCheck: event.currentTarget.ariaChecked,
                          filterName: categorym
                        })} id={categorym}>
                          <Checkbox.Indicator >
                            <Check />
                          </Checkbox.Indicator>
                        </CheckboxRoot>
                        <label className="Label" htmlFor={categorym}>
                          {categorym}
                        </label>
                      </div>
                      <CartegorySub>
                        {
                          subcategorias.map(subcategoria => {
                            return (
                              <div key={subcategoria} style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                <CheckboxRoot id={subcategoria} onClick={(event) => handleSubCategorias({
                                  verifyCheck: event.currentTarget.ariaChecked,
                                  filterName: subcategoria
                                })}>
                                  <Checkbox.Indicator >
                                    <Check />
                                  </Checkbox.Indicator>
                                </CheckboxRoot>
                                <label className="Label" htmlFor={subcategoria}>
                                  {subcategoria}
                                </label>

                              </div>
                            )
                          })
                        }
                      </CartegorySub>

                    </CartegoryAndSub>
                  )
                })
              }
            </FormFilterList>
          </div>

        </FilterProducts>
        <ProductsList>
          {
            productsList?.map(produtc => {
              return (
                <CardProdutc key={produtc.id}>
                  <ImgProduct>
                    <img src={produtc.image} alt="" />
                  </ImgProduct>
                  <p>{produtc.description}</p>
                  <p>{produtc.value} DOTZ</p>
                  <Button onClick={() => addProduct(String(produtc.id))}>Adicionar no carrinho</Button>
                </CardProdutc>
              )
            })
          }






        </ProductsList>
      </HomeContainer>
    </HomeViewContainer>
  )
}