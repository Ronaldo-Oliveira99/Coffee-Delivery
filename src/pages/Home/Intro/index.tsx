import { Title } from './components/Title'
import { IntroContainer } from './styles'
import imgCofee from '../../../assets/imgCofee.svg'

// import { Countdown } from './components/Countdown'

export function Intro() {
  return (
    <IntroContainer>
      <Title />
      <img src={imgCofee} alt="" />
    </IntroContainer>
  )
}
