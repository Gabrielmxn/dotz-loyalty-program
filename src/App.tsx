import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { RoutesProvider } from './routes/routes.tsx'

import './styles/global.css'
import { Toaster } from "sonner";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query.ts";
import { CartProvier } from "./components/context/CartProvier.tsx";

export function App() {
  return (
    <CartProvier>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>

          <Toaster position="top-right" richColors />
          <RoutesProvider />
        </QueryClientProvider>

      </ThemeProvider>
    </CartProvier>
  )
}