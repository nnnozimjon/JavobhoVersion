import React from 'react'
import ILogin from '@/pages/login/login.interface'

const Input = ({
  placeholder,
  onChange,
  value,
  type,
  className,
}: ILogin.props) => {
  const InputRef = React.useRef<HTMLInputElement | null>(null)

  return (
    <div className="relative">
      {value && (
        <span className="absolute top-[-9px] bg-white px-[3px] text-[12px] left-[20px] font-medium text-gray">
          {placeholder?.toLocaleLowerCase()}
        </span>
      )}
      <input
        autoComplete={type === 'password' ? 'current-password' : ''}
        ref={InputRef}
        className={`${className} border-[0.1px] border-border rounded pl-[20px] p-[10px] w-full  outline-none 
        `}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  )
}

export default Input
