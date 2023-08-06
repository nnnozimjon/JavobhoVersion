import React, { ReactNode, useState } from 'react'
import Input from '@/components/Input/Input'
import Ico from '@/components/icon'
import { ApiAuth } from '@/api/auth'

interface newUser {
  email: string
  username: string
  password: string
}

class Reg {
  User(newUser: newUser) {
    try {
      ApiAuth.registration(newUser).then(res => {
        return res
      })
    } catch (error) {
      return error
    }
  }
}

const Register: React.FC<any> = ({ setAuthView }) => {
  const Register = new Reg()
  const initailState: newUser = {
    email: '',
    username: '',
    password: '',
  }

  const [step, setStep] = useState<number>(0)
  const [newUser, setNewUser] = useState<newUser>(initailState)

  const setNewUserState = (
    key: string,
    value: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewUser(prev => ({
      ...prev,
      [key]: value.target.value,
    }))
  }

  const view: any = []
  const func: any = []

  func[0] = () => {
    setStep(step + 1)
  }

  func[1] = () => {
    Register.User(newUser)
  }
  func['back'] = () => {
    if (step !== 0) {
      setStep(step - 1)
    }
    return
  }

  view[0] = (
    <>
      <Input
        placeholder={'Email'}
        type={'text'}
        value={newUser.email}
        label="Email"
        onChange={e => setNewUserState('email', e)}
      />
    </>
  )
  view[1] = (
    <>
      <Input
        placeholder={'Username'}
        type={'text'}
        value={newUser.username}
        label="Username"
        onChange={e => setNewUserState('username', e)}
      />
      <Input
        placeholder={'Password'}
        type={'password'}
        value={newUser.password}
        label="Password"
        onChange={e => setNewUserState('password', e)}
      />
    </>
  )

  return (
    <>
      <div className="flex flex-col gap-[15px] pl-4 border-invisible">
        <h1 className="text-[25px] font-medium text-center text-main">
          Sign up
        </h1>
        {step != 0 && (
          <div className="flex gap-[10px]">
            <Ico
              name="arrowback"
              className="text-main"
              onClick={func['back']}
            />
            <p>Back</p>
          </div>
        )}
        {view[step]}
        <p className="font-medium text-[12px] text-darkerRuby">{''}</p>
        <div className="flex flex-col-reverse lg:flex-row md:flex-row md:justify-between  lg:justify-between items-start place-items-end"></div>
        <button
          className={`p-[10px] rounded-full ${
            (
              step === 0
                ? newUser.email.includes('@') && newUser.email.length > 10
                : newUser.username.length >= 3 &&
                  newUser.username &&
                  newUser.password &&
                  newUser.password.length >= 8
            )
              ? 'bg-darkblue hover:bg-main'
              : 'bg-invisible'
          } text-white transition duration-500 font-bold`}
          onClick={
            (
              step === 0
                ? newUser.email.includes('@') && newUser.email.length > 10
                : newUser.username.length > 3 && newUser.password.length > 8
            )
              ? func[step]
              : () => {}
          }
        >
          {step === 1 ? 'Sign up' : 'Next'}
        </button>

        <div className="flex justify-center gap-4 text-indigo">
          You have account?
          <span onClick={() => setAuthView('login')} className="text-darkblue">
            Login
          </span>
        </div>
      </div>
    </>
  )
}

export default Register
