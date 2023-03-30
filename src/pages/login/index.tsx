import React from 'react'
import Head from 'next/head'
import AuthDesktop from '@/components/LoginPage/Auth.desktop'
import Device from '@/components/device/Device'
import AuthMobi from '@/components/LoginPage/Auth.mobile'

export default function Login() {
  return (
    <>
      <Head>
        <title>Javobho</title>
        <meta
          name="description"
          content="Login to Twitter to see the latest."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Log in</title>
      </Head>
<<<<<<< HEAD
      <div className="flex justify-center items-center w-screen h-screen">
        <Image
          src={sky}
          alt="background"
          className="w-full h-full absolute select-none"
        />
        <div className="flex flex-col gap-[15px] text-black z-10 bg-[#fff] w-[420px] rounded-[20px] p-[20px] shadow-sm shadow-gray min-w-[420px]">
          <div className="flex items-center justify-center gap-[15px]">
            <Image src={logo} alt="Javobho logo" className="w-[50px]" />
            <h1 className={`text-center font-bold text-[25px] text-main`}>
              Login
            </h1>
          </div>
          <Input
            placeholder={'Username'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserName(e.target.value)
            }}
            type={'text'}
            value={username}
          />
          <Input
            placeholder={'Password'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value)
            }}
            type={'password'}
            value={password}
          />
          <button
            onClick={login}
            className="p-[10px] rounded-full bg-darkblue text-white hover:bg-main transition duration-500 font-bold"
          >
            Login
          </button>
          <Button text="Login" onClick={() => alert('Credentials needed')} />
          <div>Remember me</div>
          <div>Registration</div>
        </div>
      </div>
=======
      <Device ds={<AuthDesktop />} mb={<AuthMobi />} />
>>>>>>> 4d0d948cc3aea73c9ac1aa84c275553897dee45e
    </>
  )
}
