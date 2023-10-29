import { ItensContainer } from './style'
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'

export function Itens() {
  return (
    <ItensContainer>
      <div id="item1">
        <ShoppingCart size={32} weight="bold" />
        Compra simples e segura
      </div>
      <div id="item3">
        <Package size={32} weight="bold" />
        Embalagem mantém o café intacto
      </div>
      <div id="item2">
        <Timer size={32} weight="bold" />
        Entrega rápida e rastreada
      </div>
      <div id="item4">
        <Coffee size={32} weight="bold" />O café chega fresquinho até você
      </div>
    </ItensContainer>
  )
}
