/* eslint-disable no-unused-vars */
declare namespace ILogin {
  interface props {
    placeholder?: string
    onChange?: (e: any) => void
    value?: string
    type: 'password' | 'text'
    className?: string
    label?: string
  }

  type props = props
}

export default ILogin
