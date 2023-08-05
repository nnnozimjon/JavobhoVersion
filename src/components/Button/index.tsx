import React from 'react'
import IButton from './Button.interface'
import Ico from '../icon'

const Button: React.FC<IButton.props> = ({
  onClick,
  text,
  color,
  name,
  bg,
  count,
  className,
}: IButton.props) => {
  return (
    <button
      onClick={onClick}
      className={`p-[5px] sm:p-[10px] rounded-lg bg-${bg} text-${color}  transition duration-500
       font-medium text-[14px] flex items-center gap-[10px] ${className}`}
    >
      {name && <Ico name={name} size={20} />}
      {text}
      {count && (
        <span className="rounded-[10px] px-[12px] py-[2px] bg-darkerIndigo text-white font-normal text-[12px]">
          {count}
        </span>
      )}
    </button>
  )
}

export default Button
