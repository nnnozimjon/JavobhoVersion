import React from 'react'
import IButton from './Button.interface'

const Button: React.FC<any> = ({ onClick, text }: IButton.props) => {
  return (
    <button
      onClick={onClick}
      className={`p-[12px] rounded-lg bg-[#005effd7] hover:bg-[#005effaf] text-[#ffffff] transition duration-500
       font-bold text-[15px]`}
    >
      {text}
    </button>
  )
}

export default Button
