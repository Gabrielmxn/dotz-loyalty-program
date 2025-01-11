import { useEffect, useState } from "react"
import { api } from "../../lib/axios"
import { AddressSchemaType } from "../../components/dialog/dialog.schema"

export function useAddressModel() {
  const [addressList, setAddressList] = useState<AddressSchemaType[]>()
  async function getAddreesList() {
    const userId = localStorage.getItem('userId')
    console.log(userId)
    const response = await api.get(`address?userId=${1}`)
    setAddressList(response.data)
  }
  useEffect(() => {
    getAddreesList()
  }, [])
  return {
    addressList
  }
}