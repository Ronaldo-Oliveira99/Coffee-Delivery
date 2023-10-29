import { ConfirmButton, SummaryOrderListContainer } from './style'

import { CoffeeSelected } from '../CoffeeSelected'

export function SummaryList() {
  return (
    <SummaryOrderListContainer>
      <CoffeeSelected />
      <hr />
      <ul>
        <li>
          <span>Total itens</span>
          <span>2.00</span>
        </li>
        <li>
          <span>Entrega</span>
          <span>2.00</span>
        </li>
        <li>
          <span>Total</span>
          <span>2.00</span>
        </li>
      </ul>

      <ConfirmButton /* disabled="" */ type="submit">
        CONFIRMAR PEDIDO
      </ConfirmButton>
    </SummaryOrderListContainer>
  )
}
