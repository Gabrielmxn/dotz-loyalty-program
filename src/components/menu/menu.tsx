import { Link } from "react-router";
import { MenuContainer, MenuList, MenuListItem, SignOut } from "./menu.styles";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

export function Menu() {
  const { logout } = useContext(AuthContext)


  return (
    <MenuContainer>
      <MenuList>
        <MenuListItem>
          <Link to={'/address'}>
            Endereços
          </Link>
        </MenuListItem>
        <MenuListItem>
          Meu extrato
        </MenuListItem>
        <SignOut onClick={logout}>
          Sair
        </SignOut>
      </MenuList>
    </MenuContainer>
  )
}