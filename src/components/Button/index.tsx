import React from 'react'
import IButton from './Button.interface'

<<<<<<< HEAD
const Button: React.FC<IButton.props> = ({ text, onClick }: IButton.props) => {
=======
const Button: React.FC<any> = () => {
>>>>>>> 4d0d948cc3aea73c9ac1aa84c275553897dee45e
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
