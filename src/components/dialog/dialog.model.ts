import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { AddressSchema, AddressSchemaType } from "./dialog.schema"
import { api } from "../../lib/axios"

export function useDialogModel(){
  const { register, handleSubmit, setValue, reset, formState: {
    errors
  } } = useForm<AddressSchemaType>({
    resolver: yupResolver(AddressSchema)
  })

  async function handleAddAddress(data: AddressSchemaType){
    try {
      await api.post(`address`, {
        ...data,
      })
    
    }catch(err){
    
      console.log(err)
    }
  }
  return{
    register, handleSubmit, setValue, reset, handleAddAddress, errors
  }
}