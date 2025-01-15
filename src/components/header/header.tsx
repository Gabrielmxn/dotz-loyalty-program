import { useContext, useState } from 'react'

import { Avatar } from '../avatar/avatar'
import { Menu } from '../menu/menu'
import logo from '../../assets/logo.png'
import { Dotz, HeaderContainer, ImgLogo, LinkCart, NavItem, ShoppingCartIcon, TotalCart } from './header.styles'
import { Link } from 'react-router'
import { useCartProduct } from '../../hook/useCartProduct'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../lib/axios'


export function Header() {
  const [menu, setMenu] = useState(false)
  const { products } = useCartProduct()

  const userId = localStorage.getItem("userId")
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => await api.get(`user/${userId}`),
    refetchInterval: 10000
  })
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <ImgLogo src={logo} alt="" />
      </Link>
      <NavItem>
        <Dotz>{data?.data.dotz} DOTZ</Dotz>
        <Avatar onClick={() => setMenu(!menu)}>
          {menu && <Menu />}
        </Avatar>

        <LinkCart to={'/cart'}>
          <ShoppingCartIcon size={24} />
          <TotalCart>{products.length}</TotalCart>
        </LinkCart>
      </NavItem>
    </HeaderContainer>
  )
}