import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { AddressSchema, AddressSchemaType } from "./dialog.schema"
import { api } from "../../lib/axios"
import { toast } from "sonner"
import { ChangeEvent } from "react"
import { viaCep } from "../../services/viacep"

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



  async function handleAddAddress(data: AddressSchemaType){
    try {
      await api.post(`address`, {
        ...data,
      })
      
      toast.success("Endereço salvo com sucesso!", {
        className: 'sonner'
      })

      reset()
    }catch(err){
      toast.error(err.message)
      console.log(err)
    }
  }
  return{
    register, handleSubmit, setValue, reset, handleAddAddress, errors, handleViaCep
  }
}