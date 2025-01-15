import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { AddressSchema, AddressSchemaType } from "./dialog.schema"
import { api } from "../../lib/axios"
import { toast } from "sonner"
import { ChangeEvent } from "react"
import { viaCep } from "../../services/viacep"
import { useMutation } from "@tanstack/react-query"
import { createAddress } from "../../infra/http/address/add"
import { queryClient } from "../../lib/react-query"
import { Address } from "../../DTOs/address"

export function useDialogModel(){
  const { register, handleSubmit, setValue, reset, formState: {
    errors
  } } = useForm<AddressSchemaType>({
    resolver: yupResolver(AddressSchema)
  })

  async function handleViaCep(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.currentTarget.value)
    if (event.currentTarget.value.length === 8) {
      const response = await viaCep(event.currentTarget.value)
      setValue('street', response.logradouro)
      setValue('neighborhood', response.bairro)
      setValue('city', response.localidade)
      setValue('state', response.estado)
    }


  }


  const { mutate: mutateCreateAddress} = useMutation({
    mutationFn: (data: AddressSchemaType) => createAddress({
      ...data
    }),
    onSuccess(data, variables, context) {
      toast.success("Endereço excluído com sucesso.")
      const queryKey = ['address', localStorage.getItem("userId")]
      const cached = queryClient.getQueryData<Address[]>(queryKey)
      
      const newAddress = {
        ...variables,
        id: data.id
      }
      reset()
      if(cached !== undefined){
        queryClient.setQueryData(queryKey, [...cached,  newAddress])
        return
      }

      queryClient.setQueryData(queryKey, [newAddress])
      
      
    },
    onError(error: AxiosError, __, ___) {
      if (error.status === 404) {
        toast.error("Endereço não foi encontrado.")
        return
      }

      toast.error("Error no servidor. Tente novamente mais tarde.")
    },
  })  

  function handleAddAddress(data: AddressSchemaType){
      mutateCreateAddress({
        ...data
      })
  }
  return{
    register, handleSubmit, setValue, reset, handleAddAddress, errors, handleViaCep, mutateCreateAddress
  }
}