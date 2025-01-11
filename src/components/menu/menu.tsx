import { Link } from "react-router";
import { MenuContainer, MenuList, MenuListItem, SignOut } from "./menu.styles";

export function Menu() {
  function handleLogout() {
    window.location.href = '/login'
  }
  return (
    <MenuContainer>
      <MenuList>
        <MenuListItem>
          Profile
        </MenuListItem>
        <MenuListItem>
          <Link to={'/address'}>
            Endereços
          </Link>
        </MenuListItem>
        <MenuListItem>
          Meu extrato
        </MenuListItem>
        <SignOut onClick={handleLogout}>
          Sair
        </SignOut>
      </MenuList>
    </MenuContainer>
  )
}