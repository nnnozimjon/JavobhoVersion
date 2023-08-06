import React from 'react'
import ILogin from '@/pages/login/login.interface'
import Ico from '../icon'

const Input = ({
  placeholder,
  onChange,
  value,
  type,
  className,
  label,
}: ILogin.props) => {
  const InputRef = React.useRef<HTMLInputElement | null>(null)
  const [eye, setEye] = React.useState<boolean>(false)

  return (
    <div className="relative">
      {label && (
        <h1 className="mb-[4px] font-semibold text-[12px] text-indigo">
          {label}
        </h1>
      )}
      {/* {value && (
        <span className="absolute top-[-9px] bg-white px-[3px] text-[12px] left-[20px] font-medium text-gray">
          {placeholder?.toLocaleLowerCase()}
        </span>
      )} */}
      <div className="flex items-center border-[0.1px] border-border rounded focus:border-darkblue justify-between">
        <input
          autoComplete={type === 'password' ? 'current-password' : ''}
          ref={InputRef}
          className={`${className} p-[10px] w-full outline-none`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type={
            type === 'text'
              ? 'text'
              : type === 'password' && eye
              ? 'text'
              : 'password'
          }
        />
        {type === 'password' && (
          <Ico
            name={eye ? 'eye' : 'eyeSlash'}
            className="mr-[10px] text-indigo absolute right-[2px]"
            onClick={() => setEye(!eye)}
          />
        )}
      </div>
    </div>
  )
}

export default Input
