import Head from 'next/head';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Style from './Layout.module.css';

function index({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>
          NextJS Basic |
          {' '}
          {pageTitle}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <div className={Style.container}>
        <Header />
        <div className={Style.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default index;
