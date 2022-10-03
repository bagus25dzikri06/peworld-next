import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerNavbar}>
          <Image src='/images/Group978_1.svg' width={178} height={50} />
        </div>
        <div className={styles.footerTagline}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        </div>
        <hr className={styles.footerDivider} />
        <div className={styles.footerNavbar}>
          <p>2020 Peworld. All right reserved</p>
          <nav>
            <Link href='#'>Telepon</Link>
            <Link href='#'>E-mail</Link>
          </nav>
        </div>
      </footer>
    </>
  )
}
