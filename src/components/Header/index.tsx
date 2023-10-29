import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import mylogo from '../../assets/icon.svg'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Carrinho">
        <img src={mylogo} alt="" />
      </NavLink>
      <nav>
        <div>
          <MapPin size={22} weight="bold" />
          <span>sao paulo, SP</span>
        </div>
        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="bold" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
