import styles from './MainPage.module.css'
import Header from '../components/header/Header';
import Main from '../components/main/Main';

function MainPage() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default MainPage;