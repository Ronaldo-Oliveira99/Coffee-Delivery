import { AmountButtonContainer } from './style'
import { Plus, Minus } from 'phosphor-react'

export function AmountButton() {
  return (
    <AmountButtonContainer>
      <Minus size={14} weight="bold" color="#8047F8" />
      <span>1</span>
      <Plus size={14} weight="bold" color="#8047F8" />
    </AmountButtonContainer>
  )
}
