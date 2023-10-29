import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { OrderPaymentContainer } from './style'
import { LabelFormContainer } from '../style'
export function OrderPayment() {
  return (
    <OrderPaymentContainer>
      <LabelFormContainer>
        <CurrencyDollar size={22} color="#8047F8" />
        <div>
          <p>Pagamento </p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </LabelFormContainer>
      <div className="paydiv">
        <span>
          <CreditCard size={16} color="#8047F8" />
          CARTÃO DE CRÉDITO
        </span>
        <span>
          <Bank size={16} className="icon" color="#8047F8" />
          CARTÃO DE DÉBITO
        </span>
        <span>
          <Money size={16} color="#8047F8" />
          DINHEIRO
        </span>
      </div>
    </OrderPaymentContainer>
  )
}
