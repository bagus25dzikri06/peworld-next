import Head from 'next/head'
import React from 'react'

export default function layouts({title, children}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}
