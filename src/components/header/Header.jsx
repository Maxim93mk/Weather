import styles from './Header.module.css'
import { useEffect, useState } from 'react';



function Header(props) {
  const [stringSearch, setStringSearch] = useState('');
  const [flagSwitch, setFlagSwitch] = useState(false);
  // Формирование строки для запроса
  const setSearchQuery = (str) => {
    setStringSearch(str);
  }
  // Отправка на запрос фильма из поисковой строки
  const sendSearchQuery = () => {
    props.axiosData(stringSearch);
  }

  const getDimensionTemp = () => {
    setFlagSwitch(flag=>!flag);  
  }

  useEffect(() => {
    props.axiosData();
  }, []);
  console.log(flagSwitch)
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
          <div className={`${flagSwitch} & ${styles.switchOn} ${styles.switchBtn} :${styles.switchOff} ${styles.switchBtnOff}`}
            onClick={() => getDimensionTemp()}></div>
        </section>
      </header>
    </>
  );
}

export default Header;