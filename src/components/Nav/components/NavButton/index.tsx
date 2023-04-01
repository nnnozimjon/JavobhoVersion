import React from 'react'
import Icon from '@/components/Icon'
import INavButton from '../interface'

const NavButton: React.FC<INavButton> = ({
  className,
  icon,
  label,
}: INavButton) => {
  return (
    <div
      className={`flex items-center min-w-[100px] w-[252px] h-[48px] px-[16px] py-[14px] text-start m-[10px] cursor-pointer select-none rounded-[6px] hover:bg-[#3C87DF] hover:text-white duration-500 ${className}`}
    >
      <Icon name={icon} />
      <h1 className={`pl-[13px] text-[14px] font-medium`}>{label}</h1>
    </div>
  )
}

export default NavButton
