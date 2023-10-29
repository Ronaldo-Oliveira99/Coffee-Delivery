import { CheckoutContainer } from './style'
import { OrderArea } from './components/OrderArea'
import { Summary } from './components/Summary'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderArea />
      <Summary />
    </CheckoutContainer>
  )
}
