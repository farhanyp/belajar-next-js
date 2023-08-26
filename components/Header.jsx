import Link from 'next/link';

function Header() {
  return (
    <div>
      <ul>
        {/* Menggunakan link tidak memerlukan reload ulang */}
        <li><Link href="/">Home</Link></li>
        <li><Link href="/user">Users</Link></li>

        {/* Menggunakan link memerlukan reload ulang */}
        <li><a href="/about">About</a></li>
      </ul>
    </div>
  );
}

export default Header;
