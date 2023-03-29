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
      <Device ds={<AuthDesktop />} mb={<AuthMobi />} />
    </>
  )
}
