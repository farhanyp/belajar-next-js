import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/index';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <h1 className={styles['title-homepage']}>Selamat Datang</h1>
    </Layout>
  );
}
