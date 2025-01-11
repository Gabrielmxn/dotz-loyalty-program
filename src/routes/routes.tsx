import { BrowserRouter, Link, Route, Routes } from "react-router";
import { SignUpPage } from "../page/signup/signup.page";
import { SignInPage } from "../page/signin/signin.page";
import { HomePage } from "../page/home/home.page";
import { AddressPage } from "../page/address/address.page";
import RootLayout from "../page/_layouts/RootLayout";

export function RoutesProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="*" element={<>Error - Pagina não encontrada <Link to={'/'}>Voltar</Link></>} />
        </Route>

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />



      </Routes>
    </BrowserRouter>
  )
}