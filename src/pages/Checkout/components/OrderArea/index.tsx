import { OrderForm } from './OrderForm'
import { OrderPayment } from './OrderPayment'
import { OrderAreaContainer } from './style'

export function OrderArea() {
  return (
    <OrderAreaContainer>
      <span>Complete seu pedido</span>
      <OrderForm />
      <OrderPayment />
    </OrderAreaContainer>
  )
}
