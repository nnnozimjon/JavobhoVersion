import React from 'react'
import IButton from './Button.interface'
import Icon from '../icon/Icon'

const Button: React.FC<IButton.props> = ({
  onClick,
  text,
  color,
  name,
  bg,
  count,
}: IButton.props) => {
  return (
    <button
      onClick={onClick}
      className={`px-[15px] py-[10px]  rounded-lg bg-${bg} text-${color} transition duration-500
       font-bold text-[14px] flex items-center gap-[10px]`}
    >
      {name && <Icon name={name} />}
      {text}
      {count && (
        <span className="border rounded-[10px] px-[12px] py-[2px] bg-darkerIndigo text-white font-normal text-[12px]">
          {count}
        </span>
      )}
    </button>
  )
}

export default Button
