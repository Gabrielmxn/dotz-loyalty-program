import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { RoutesProvider } from './routes/routes.tsx'

import './styles/global.css'
import { Toaster } from "sonner";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster position="top-right" richColors />
      <RoutesProvider />
    </ThemeProvider>
  )
}