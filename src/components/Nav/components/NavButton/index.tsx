import React from 'react'
import Icon from '@/components/Icon'
import INavButton from '../interface'

const NavButton: React.FC<INavButton> = ({
  className,
  icon,
  label,
  onClick,
  data_dropdown_toggle,
  id,
}: INavButton) => {
  return (
    <button
      id={id}
      data-dropdown-toggle={data_dropdown_toggle}
      onClick={onClick}
      className={`flex items-center min-w-[100px] w-[252px] h-[48px] px-[16px] py-[14px] text-start m-[10px] cursor-pointer select-none rounded-[6px] hover:bg-[#3C87DF] hover:text-white duration-500 ${className}`}
    >
      <Icon name={icon} />
      <h1 className={`pl-[13px] text-[14px] font-medium`}>{label}</h1>
    </button>
  )
}

export default NavButton
