import IIcon from '../Icon'
declare namespace IButton {
  interface props {
    onClick?: () => void
    text: string
    bg: 'main' | 'white' | 'darkestRuby' | 'darkestIndigo' | 'darkestCoral'
    name?: IIcon.name
    color?: 'white' | 'black' | 'darkestRuby' | 'darkestIndigo' | 'darkestCoral'
    count?: number
    className?: string
  }

  type props = props
}

export default IButton
