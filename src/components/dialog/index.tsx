import { ClosedCaptioning } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChangeEvent, FocusEvent, ReactNode } from "react";
import { Content, DialogFormContainer, FormRowOne, Overlay } from "./dialog.styles";
import { Input } from "../input/input";
import { Button } from "../button/button";
import { viaCep } from "../../services/viacep";
import { useDialogModel } from "./dialog.model";

type DialogFormPropsSchema = ReturnType<typeof useDialogModel>
interface DialogFormProps extends DialogFormPropsSchema {
  children: ReactNode
}


export function DialogForm(props: DialogFormProps) {
  const { children, handleSubmit, register, setValue, reset, handleAddAddress, errors, handleViaCep } = props
  console.log(errors)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Novo endereço</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Adicione um novo endereço
          </Dialog.Description>
          <DialogFormContainer onSubmit={handleSubmit(handleAddAddress)}>
            <FormRowOne>
              <Input
                label="CEP"
                placeholder="Preenche o CEP"

                {...register('cep')}
                onChange={(event) => handleViaCep(event)}
              />
              <Input
                label="Rua"
                {...register('street')}
              />
            </FormRowOne>

            <FormRowOne>

              <Input
                label="Numero"
                {...register('number')}
              />
              <Input
                label="Complemento"
                {...register('complement')}
              />
            </FormRowOne>
            <FormRowOne>
              <Input
                label="Bairro"
                {...register('neighborhood')}
              />
              <Input
                label="Cidade"
                {...register('city')}
              />
              <Input
                label="Estado"
                {...register('state')}
              />
            </FormRowOne>
            <Button type="submit">Salvar</Button>
          </DialogFormContainer>


        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}