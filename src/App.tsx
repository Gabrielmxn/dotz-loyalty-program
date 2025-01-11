import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { RoutesProvider } from './routes/routes.tsx'

import './styles/global.css'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutesProvider />
    </ThemeProvider>
  )
}