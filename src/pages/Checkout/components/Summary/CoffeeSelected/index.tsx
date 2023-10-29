import {
  SelectedCoffeeButtonsContainer,
  SelectedCoffeeContainer,
} from './styled'
import { AmountButton } from '../../../../../components/Buttons/AmountButton'
import { RemoveButton } from '../../../../../components/Buttons/RemoveButton'
import Cofee from '../../../../../assets/Coffee.svg'

export function CoffeeSelected() {
  return (
    <SelectedCoffeeContainer>
      <img src={Cofee} alt="" />
      <div>
        <p>Expresso Tradicional</p>
        <SelectedCoffeeButtonsContainer>
          <AmountButton />
          <RemoveButton />
        </SelectedCoffeeButtonsContainer>
      </div>
      <label>R$ 9,00</label>
    </SelectedCoffeeContainer>
  )
}
