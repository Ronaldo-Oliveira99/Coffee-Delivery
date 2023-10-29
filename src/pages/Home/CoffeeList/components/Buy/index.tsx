import { AmountButton } from '../../../../../components/Buttons/AmountButton'
import { CardBuyContainer } from './style'
// import { Plus, Minus } from 'phosphor-react'

export function CardBuy() {
  return (
    <CardBuyContainer>
      <p>
        <label>R$</label> 9,00
      </p>
      <AmountButton />
    </CardBuyContainer>
  )
}
