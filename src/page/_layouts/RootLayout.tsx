import { Outlet } from "react-router"
import { Header } from "../../components/header/header"
import { Container, Main } from "./rootLayout.styles"
import { AuthProvider } from "../../components/context/AuthProvider"

export default function RootLayout() {
  return (
    <AuthProvider>
      <Container>

        <Header />
        <Main>
          <Outlet />
        </Main>

      </Container>
    </AuthProvider>
  )
}