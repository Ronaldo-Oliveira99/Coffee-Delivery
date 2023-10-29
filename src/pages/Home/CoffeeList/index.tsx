import { CoffeeListContainer } from './styles'
import { Header } from './components/Header'
import { ListCoffee } from './components/ListCoffee'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <Header />
      <ListCoffee />
    </CoffeeListContainer>
  )
}
