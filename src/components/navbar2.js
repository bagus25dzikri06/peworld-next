import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar2.module.css'

export default function Navbar2() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <Link href='/'>
            <a>
              <Image src='/images/Group980_1.svg' width={127} height={35} />
            </a>
          </Link>
          <Link href='#'><h1>Home</h1></Link>
        </nav>
        <button className={styles.profile}>Profile</button>
      </header>
    </>
  )
}
