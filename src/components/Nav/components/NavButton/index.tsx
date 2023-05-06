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
      className={`flex items-center sm:min-w-[100px] p-0 sm:w-[252px] sm:h-[48px] sm:px-[16px] sm:py-[14px] text-start m-[10px] cursor-pointer select-none rounded-[6px] sm:hover:bg-[#3C87DF] sm:hover:text-white duration-500 ${className}`}
    >
      <Icon name={icon} />
      <h1
        className={`hidden sm:block p-0 sm:pl-[13px] text-[14px] font-medium`}
      >
        {label}
      </h1>
    </button>
  )
}

export default NavButton
