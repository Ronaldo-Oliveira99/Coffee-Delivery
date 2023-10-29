import { MapPin } from 'phosphor-react'
import {
  OrderFormContainer,
  CepInput,
  StreetInput,
  NumberInput,
  ComplementoInput,
  BairroInput,
  CityInput,
  UfInput,
} from './style'
import { LabelFormContainer } from '../style'

export function OrderForm() {
  return (
    <OrderFormContainer>
      <LabelFormContainer>
        <MapPin size={22} weight="bold" />
        <div>
          <p>Endereço de Entrega </p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </LabelFormContainer>
      <form>
        <CepInput id="task" placeholder="Cep" />
        <StreetInput id="task" placeholder="Rua" />
        <NumberInput id="task" placeholder="Numero" />
        <ComplementoInput id="task" placeholder="Complemento" />
        <BairroInput id="task" placeholder="Bairro" />
        <CityInput id="task" placeholder="Cidade" />
        <UfInput id="task" placeholder="UF" />
      </form>
    </OrderFormContainer>
  )
}
