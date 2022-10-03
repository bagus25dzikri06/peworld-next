import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegBell, FaUserCircle } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import styles from '../styles/Navbar3.module.css'

export default function Navbar2() {
  return (
    <>
      <header className={styles.header}>
        <Link href='/'>
          <a>
            <Image src='/images/Group980_1.svg' width={127} height={35} />
          </a>
        </Link>
        <nav>
          <FaRegBell size={30} />
          <FiMail size={30} />
          <FaUserCircle size={30} />
        </nav>
      </header>
    </>
  )
}
