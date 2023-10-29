import { AmountButtonRemoveContainer } from './style'
import { Trash } from 'phosphor-react'

export function RemoveButton() {
  return (
    <AmountButtonRemoveContainer>
      <Trash size={16} color="#8047F8" />
      REMOVER
    </AmountButtonRemoveContainer>
  )
}
