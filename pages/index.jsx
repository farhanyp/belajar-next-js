import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/index';

export default function Home() {
  return (
    <Layout>
      <h1 className={styles['title-homepage']}>Selamat Datang</h1>
    </Layout>
  );
}
