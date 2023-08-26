import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        {/* Menggunakan link tidak memerlukan reload ulang */}
        <li className={styles.item}><Link href="/">Home</Link></li>
        <li className={styles.item}><Link href="/user">Users</Link></li>

        {/* Menggunakan link memerlukan reload ulang */}
        <li className={styles.item}><a href="/about">About</a></li>
      </ul>
    </header>
  );
}

export default Header;
