import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { Product } from "../../DTOs/products"
import { getProducts } from "../../infra/http/products/get"
import { useCartProduct } from "../../hook/useCartProduct"
import { useParams } from "react-router"

interface handleCategoriasProps {
  verifyCheck: string | null
  filterName: string
}

type CategoriesMenu = {
  [category: string]: Set<string>;
};

type CategoriesMenuT = {
  [category: string]: string[];
};
export function useHomeModel() {
  const [menu, setMenu] = useState(false)
  const [categorias, setCategorias] = useState<CategoriesMenu>({} as CategoriesMenu)
  const [categoriass, setCategoriass] = useState<CategoriesMenuT>({} as CategoriesMenuT)
  const [filterCategory, setFilterCategory] = useState<string[]>([])
  const [filterSubCategory, setFilterSubCategory] = useState<string[]>([])
  const { addProduct, products } = useCartProduct()

  useParams()

  const { data: productsList } = useQuery<Product[]>({
    queryKey: ["products", ...filterCategory, ...filterSubCategory],
    queryFn: () => getProducts({
      filterCategory,
      filterSubCategory
    }),
  })

  function getCategoriesMenu() {

  }
  function handleCategorias({
    verifyCheck,
    filterName
  }: handleCategoriasProps) {
    const isVerifyCheck = verifyCheck === "true"
    console.log(verifyCheck, filterName)
    if (!isVerifyCheck) {
      setFilterCategory(state => [...state, filterName])
    } else {
      const filter = filterCategory.filter(response => response !== filterName)
      setFilterCategory(filter)
    }
  }

  function handleSubCategorias({
    verifyCheck,
    filterName
  }: handleCategoriasProps) {
    const isVerifyCheck = verifyCheck === "true"
    console.log(verifyCheck, filterName)
    if (!isVerifyCheck) {
      setFilterSubCategory(state => [...state, filterName])
    } else {
      const filter = filterSubCategory.filter(response => response !== filterName)
      setFilterSubCategory(filter)
    }
  }

  useEffect(() => {
    if (productsList) {
      productsList.forEach(({ category, subcategory }) => {
        if (!categorias[category]) {
          categorias[category] = new Set(); // Utiliza Set para evitar duplicatas
        }
        categorias[category].add(subcategory);
      });

      // Converte os Sets para arrays
      const categoriasArray = Object.fromEntries(
        Object.entries(categorias).map(([key, value]) => [key, Array.from(value)])
      );

      setCategoriass(categoriasArray)
    }


  }, [productsList, categorias])
  return {
    menu, setMenu, productsList, addProduct, products, filterCategory, handleCategorias, categoriass, filterSubCategory, handleSubCategorias
  }
}