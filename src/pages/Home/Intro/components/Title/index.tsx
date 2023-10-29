import { TitleContainer } from './styles'
import { Itens } from '../Itens'

export function Title() {
  return (
    <TitleContainer>
      <div id="title1">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </div>
      <Itens />
    </TitleContainer>
  )
}
