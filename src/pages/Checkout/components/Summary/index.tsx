import { SummaryList } from './SummaryList'
import { SummaryContainer } from './style'

export function Summary() {
  return (
    <SummaryContainer>
      <span>Cafés selecionados</span>
      <SummaryList />
    </SummaryContainer>
  )
}
