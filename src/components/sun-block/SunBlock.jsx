import styles from './Sun.module.css';
import { useEffect } from 'react';

function SunBlock(props) {

  const getTime = (unix) => {
    const getCurrentDate = new Date(unix * 1000);
    const hours = getCurrentDate.getHours();
    const minutes = getCurrentDate.getMinutes();
    return `${hours} : ${minutes}`;
  }


  return (
    <>
      <div className={styles.main}>
        <div className={styles.wind}>
          <img src="assets/img/sunrise.svg" alt="Восход" />
          <p className='descrText'>{getTime(props.sunrise)}</p>
        </div>
        <div className={styles.wind}>
          <img src="assets/img/sunset.svg" alt="Закат" />
          <p className='descrText'>{getTime(props.sunset)}</p>
        </div>
      </div>
    </>
  );
}

export default SunBlock;