import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Style from './Layout.module.css';

function index({ children }) {
  return (
    <div className={Style.container}>
      <Header />
      <div className={Style.content}>{children}</div>
      <Footer />
    </div>
  );
}

export default index;
