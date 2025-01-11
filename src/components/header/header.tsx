import { useState } from 'react'

import { Avatar } from '../avatar/avatar'
import { Menu } from '../menu/menu'
import logo from '../../assets/logo.png'
import { HeaderContainer } from './header.styles'
import { Link } from 'react-router'


export function Header() {
  const [menu, setMenu] = useState(false)
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={logo} alt="" />
      </Link>
      <Avatar onClick={() => setMenu(!menu)}>
        {menu && <Menu />}
      </Avatar>
    </HeaderContainer>
  )
}