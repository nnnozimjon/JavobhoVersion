/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import IIcon from '../icon'
declare namespace INav {
  interface nav {
    icon: IIcon.name
    label: string
    activeIcon: IIcon.name
    path: string
  }
}

export default INav
