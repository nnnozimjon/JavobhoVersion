import { useSettings } from '@/store'
import React from 'react'

const Button: React.FC<any> = () => {
  const { settings } = useSettings()

  return (
    <button
      className={`p-[12px] rounded-lg bg-[#005effd7] text-[#ffffff]
       font-bold text-[15px]`}
    >
      Login
    </button>
  )
}

export default Button
