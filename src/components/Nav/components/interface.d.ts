import IIcon from '@/components/Icon/interface'

interface props {
  className?: string
  icon: IIcon.name
  label: string
  onClick?: () => void
  data_dropdown_toggle?: any
  id?: string
}

type INavButton = props

export default INavButton
