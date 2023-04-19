import Head from 'next/head'
import React from 'react'

interface Props {
  title: string
  text: string
  fullname: string
  username: string
}
const AskedQuestion: React.FC<Props> = ({
  title,
  text,
  fullname,
  username,
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={text} key={'title'} />
        <meta name="description" content={text} />
        <meta
          name="keywords"
          content={'javobho, explore, question, how to, why, why so'}
        />
        <meta name="author" content={fullname || username} />
        <meta name="robots" content="index, follow" />
      </Head>
      <div>
        <h1>Welcome to here!</h1>
      </div>
    </>
  )
}

export default AskedQuestion
