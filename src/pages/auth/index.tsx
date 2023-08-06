import React, { useState } from 'react'
import Input from '@/components/Input/Input'
import Ico from '@/components/icon'
import { ApiAuth } from '@/api/auth'

interface NewUser {
  email: string
  username: string
  password: string
}

class Reg {
  async registerUser(newUser: NewUser) {
    try {
      const res = await ApiAuth.registration(newUser)
      return res
    } catch (error) {
      throw error
    }
  }
}

const Register: React.FC<any> = ({ setAuthView }) => {
  const registration = new Reg()
  const initialState: NewUser = {
    email: '',
    username: '',
    password: '',
  }

  const [step, setStep] = useState<number>(0)
  const [newUser, setNewUser] = useState<NewUser>(initialState)

  const setNewUserState = (key: string, value: string) => {
    setNewUser(prev => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handleBackStep = () => {
    if (step !== 0) {
      setStep(step - 1)
    }
  }

  const handleRegisterUser = async () => {
    try {
      const res = await registration.registerUser(newUser)
      // Do something with the response if needed
    } catch (error) {
      // Handle error if registration fails
    }
  }

  const view = [
    <Input
      key={0}
      placeholder="Email"
      type="text"
      value={newUser.email}
      label="Email"
      onChange={e => setNewUserState('email', e.target.value)}
    />,
    <>
      <Input
        placeholder="Username"
        type="text"
        value={newUser.username}
        label="Username"
        onChange={e => setNewUserState('username', e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={newUser.password}
        label="Password"
        onChange={e => setNewUserState('password', e.target.value)}
      />
    </>,
  ]

  return (
    <>
      <div className="flex flex-col gap-[15px] pl-4 border-invisible">
        <h1 className="text-[25px] font-medium text-center text-main">
          Sign up
        </h1>
        {step !== 0 && (
          <div className="flex gap-[10px]">
            <Ico
              name="arrowback"
              className="text-main"
              onClick={handleBackStep}
            />
            <p>Back</p>
          </div>
        )}
        {view[step]}
        <p className="font-medium text-[12px] text-darkerRuby">{''}</p>
        <div className="flex flex-col-reverse lg:flex-row md:flex-row md:justify-between lg:justify-between items-start place-items-end" />
        <button
          className={`p-[10px] rounded-full ${
            step === 0
              ? newUser.email.includes('@') && newUser.email.length > 10
                ? 'bg-darkblue hover:bg-main'
                : 'bg-invisible'
              : newUser.username.length >= 3 && newUser.password.length >= 8
              ? 'bg-darkblue hover:bg-main'
              : 'bg-invisible'
          } text-white transition duration-500 font-bold`}
          onClick={
            (
              step === 0
                ? newUser.email.includes('@')
                : newUser.username.length >= 3
            )
              ? step === 1
                ? handleRegisterUser
                : handleNextStep
              : () => {}
          }
        >
          {step === 1 ? 'Sign up' : 'Next'}
        </button>

        <div className="flex justify-center gap-4 text-indigo">
          You have an account?
          <span
            onClick={() => setAuthView('login')}
            className="text-darkblue cursor-pointer select-none"
          >
            Login
          </span>
        </div>
      </div>
    </>
  )
}

export default Register
