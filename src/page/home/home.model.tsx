import { useState } from "react"

export function useHomeModel() {
  const [menu, setMenu] = useState(false)

  return {
    menu, setMenu
  }
}