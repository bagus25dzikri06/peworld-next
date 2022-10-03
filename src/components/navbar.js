import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <>
      <header className={styles.header}>
        <Link href='/'>
          <a>
            <Image src='/images/Group980_1.svg' width={127} height={35} />
          </a>
        </Link>
        <nav>
          <button className={styles.masuk}>Masuk</button>
          <button className={styles.daftar}>Daftar</button>
        </nav>
      </header>
    </>
  )
}
