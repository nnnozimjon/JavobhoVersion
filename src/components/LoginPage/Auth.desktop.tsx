/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import sky from '@/assets/img/back.jpg'
import logo from '@/assets/img/svg-logo.png'
import Input from '../Input/Input'
import { useUser } from '@/store/contexts/UserContect'
import { ApiAuth } from '@/api/auth'
import { cookies } from '@/utils/Cookies'
import jwtDecode from 'jwt-decode'
import Link from 'next/link'
import Register from '@/pages/auth'

interface UserPayloadRespone {
  message: string
  token: string
  status?: string
}

const AuthDesktop = () => {
  const { setUser } = useUser()
  const [AuthView, setAuthView] = React.useState('login')
  const [username, setUserName] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const [robot, setRobot] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string>('')

  const handleLogin = async () => {
    username.length >= 3 &&
      username &&
      password &&
      password.length >= 8 &&
      (await ApiAuth.login({ username, password, robot }).then(
        (res: UserPayloadRespone) => {
          if (res?.message !== 'Success') {
            setError(res.message)
          }
          setUser(jwtDecode(res.token))
          cookies.set('access_token', res.token)
          window.location.replace('/')
        }
      ))
  }

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <Image
          src={sky}
          alt="background"
          className="w-full h-full absolute select-none object-cover"
        />
        <div className="flex flex-col gap-[15px] text-black  bg-white w-[550px] p-[20px] shadow-sm shadow-gray z-50 h-full sm:h-auto">
          <div className="flex items-center justify-center gap-[15px]">
            <h1 className={`text-center font-bold text-[45px] text-main`}>
              Javobho
            </h1>
          </div>
          <p className="text-center text-[#636466] font-bold">
            A place to share knowledge and better understand the world
          </p>
          <div className="w-full">
            {AuthView === 'login' ? (
              <div className="flex flex-col gap-[15px] pl-4 border-invisible">
                <h1 className="border-invisible text-[25px] font-medium text-center text-main">
                  Login
                </h1>
                <Input
                  placeholder={'Username'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (error) {
                      setError('')
                    }
                    setUserName(e.target.value)
                  }}
                  type={'text'}
                  value={username}
                  label="Username"
                />
                <Input
                  placeholder={'Password'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (error) {
                      setError('')
                    }
                    setPassword(e.target.value)
                  }}
                  type={'password'}
                  value={password}
                  label="Password"
                />
                <p className="font-medium text-[12px] text-darkerRuby">
                  {error}
                </p>
                <div className="flex flex-col-reverse lg:flex-row md:flex-row md:justify-between  lg:justify-between items-start place-items-end">
                  <div className="flex items-center p-[5px]">
                    <input
                      type="checkbox"
                      checked={robot}
                      onChange={() => {
                        setError('')
                        setRobot(!robot)
                      }}
                    />
                    <p className="pb-[4px] pl-[10px] text-indigo">
                      {' '}
                      I am not Robot
                    </p>
                  </div>
                  <button className="pb-[4px] hover:underline text-[12px] text-indigo">
                    Forgot password
                  </button>
                </div>
                <button
                  onClick={handleLogin}
                  className={`p-[10px] rounded-full ${
                    username.length >= 3 &&
                    username &&
                    password &&
                    password.length >= 8
                      ? 'bg-darkblue hover:bg-main'
                      : 'bg-invisible'
                  } text-white transition duration-500 font-bold`}
                >
                  Login
                </button>
                <div className="flex justify-center gap-4 text-indigo">
                  Don't have an account?
                  <span
                    onClick={() => setAuthView('register')}
                    className="text-darkblue"
                  >
                    Sign up
                  </span>
                </div>
              </div>
            ) : (
              <Register setAuthView={setAuthView} />
            )}
            <br />
            <div className="text-center ">
              <p className="font-normal text-[14px] text-gray">
                By continuing you indicate that you agree to Javobho's{' '}
                <a href="" className="text-main">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="" className="text-main">
                  Privacy Policy
                </a>
                . All rights reserved 2023 Tajcent Entertainment!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthDesktop
