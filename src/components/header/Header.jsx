import styles from './Header.module.css'
import useGetWeatherData from '../../utils/getDataAPI';
import { useEffect, useState } from 'react';



function Header() {

  const { isLoading, getWeatherData, error, axiosData } = useGetWeatherData();

  // useEffect(() => {
  //   axiosData();
  // }, []);
  console.log(getWeatherData, error);
  return (
    <>
      <header>
        {/* <div className="wrapper"> */}
          <section className={styles.header}>
            <h1 className={styles.title}>Погода в городе</h1>
            <div className={styles.searchBlock}>
              <input type="text"
                className={styles.searchInput}
                placeholder='Введите название города...' />
              <button className={styles.searchBtn}
              onClick={()=>axiosData()}></button>
            </div>
          </section>
        {/* </div> */}
      </header>
    </>
  );
}

export default Header;