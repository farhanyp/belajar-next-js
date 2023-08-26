import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className={styles['title-homepage']}>Selamat Datang</h1>
      <Footer />
    </div>
  );
}
