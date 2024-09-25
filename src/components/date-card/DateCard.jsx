import styles from './DateCard.module.css'
import useGetTimeZone from '../../utils/getDate';
import { useEffect } from 'react';


function DateCard(props) {
  const{hours, minutes, day, week, month, year, getCurrentDate} = useGetTimeZone();
  
  useEffect(()=>{
    getCurrentDate(props.timezone);
    
  }, []);

  return (
    <>
      <div className={styles.date}>
        <div className={styles.up}>
          <div className={styles.cityBlock}>
            <img src='assets/img/navigation.svg' alt="Значок навигации" className={styles.icon} />
            <p className={styles.city}>{props.name}</p>
          </div>
          <div className={styles.coordBlock}>
            <p className={styles.textValue}><span className={styles.descr}>Координаты на карте: </span>  {props.lon}°, {props.lat}°</p>
          </div>
        </div>
        <div className={styles.down}>
          <p className={styles.time}>{hours}:{minutes}</p>
          <p className={styles.currentDate}>{day} {month} {year}, {week}</p>
        </div>
      </div>
    </>
  );
}

export default DateCard;