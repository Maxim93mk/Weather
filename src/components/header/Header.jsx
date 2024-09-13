import styles from './Header.module.css'
import { useEffect, useState } from 'react';



function Header(props) {
  const [stringSearch, setStringSearch] = useState('');

  // Формирование строки для запроса
  const setSearchQuery = (str) => {
    setStringSearch(str);
  }
  // Отправка на запрос фильма из поисковой строки
  const sendSearchQuery = () => {
    props.axiosData(stringSearch);
  }

  // useEffect(() => {
  //   props.axiosData();
  // }, []);

  return (
    <>
      <header>
        <section className={styles.header}>
          <h1 className={styles.title}>Погода в городе</h1>
          <div className={styles.searchBlock}>
            <input type="text"
              className={styles.searchInput}
              placeholder='Введите название города...'
              onChange={(evt) => setSearchQuery(evt.target.value)}
              onKeyUp={(evt) => evt.key === 'Enter' ? sendSearchQuery() : ''} />
            <button className={styles.searchBtn}
              onClick={() => sendSearchQuery()}></button>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;