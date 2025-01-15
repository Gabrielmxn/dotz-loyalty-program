import { useMutation, useQuery } from "@tanstack/react-query"
import { getAddress } from "../../infra/http/address/get"
import { deleteAddress } from "../../infra/http/address/delete"
import { toast } from "sonner"
import { AxiosError } from "axios"
import { queryClient } from "../../lib/react-query"
import { AddressSchemaType } from "../../components/dialog/dialog.schema"
import { Address } from "../../DTOs/address"

type MutationType = {
  id: string
}
export function useAddressModel() {
  const userId = localStorage.getItem("userId") || ''

  const { data: addressList } = useQuery({
    queryKey: ['address', localStorage.getItem("userId")],
    queryFn: () => getAddress({
      userId
    })
  })


  const { mutate: mutateDeleteAddress } = useMutation({
    mutationFn: ({ id }: MutationType) => deleteAddress({
      id
    }),
    onSuccess(data, variables, context) {
      toast.success("Endereço excluído com sucesso.")
      const queryKey = ['address', localStorage.getItem("userId")]
      const cached = queryClient.getQueryData<Address[]>(queryKey)
      const filterCached = cached?.filter(response => response.id !== variables.id)
      queryClient.setQueryData(queryKey, filterCached)

    },
    onError(error: AxiosError, __, ___) {
      if (error.status === 404) {
        toast.error("Endereço não foi encontrado.")
        return
      }

      toast.error("Error no servidor. Tente novamente mais tarde.")
    },
  })


  return {
    addressList,
    mutateDeleteAddress
  }
}