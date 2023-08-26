import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        {/* Menggunakan link tidak memerlukan reload ulang */}
        <li><Link href="/" >Home</Link></li>
        <li><Link href="/user" >Users</Link></li>
        
        {/* Menggunakan link memerlukan reload ulang */}
        <li><a href="/about">About</a></li>
      </ul>
    </div>
  )
}
