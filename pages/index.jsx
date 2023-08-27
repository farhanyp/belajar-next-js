import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/index';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <h1 className={styles['title-homepage']}>Selamat Datang</h1>
      <Image src="/motor.jpeg" width={200} height={200} />

    </Layout>
  );
}
