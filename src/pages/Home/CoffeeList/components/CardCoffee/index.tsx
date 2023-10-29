import { CardCoffeeContainer } from './style'
import { CardBuy } from '../Buy'
import Cofee from '../../../../../assets/Coffee.svg'

export function CardCoffee() {
  return (
    <CardCoffeeContainer>
      <img src={Cofee} alt="" />

      <ul>
        <li>TRADICIONAL</li>
        <li>QUENTE</li>
        <li>ALCÓLICO</li>
      </ul>

      <h3>Capuccino</h3>
      <p>Drink gelado de café expresso com rum, creme de leite e hortelã</p>
      <CardBuy />
    </CardCoffeeContainer>
  )
}
