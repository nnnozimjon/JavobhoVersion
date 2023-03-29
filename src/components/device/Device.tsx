import { useSettings } from '@/store'
import React from 'react'
import { IDevice } from './IDevice'

const Device: React.FC<IDevice> = ({ mb, ds }: IDevice) => {
  const { settings } = useSettings()
  const isMobile = settings.isMobile

  return isMobile ? mb : ds
}

export default Device
