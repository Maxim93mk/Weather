import styles from './WeatherCard.module.css';
import TempBlock from '../temp-block/TempBlock';

function WeatherCard(props) {

  return (
    <>
      <div className={styles.main}>
        <TempBlock/>
       
        <div className={styles.weatherConditions}>
          <div className={styles.x}>
            <img src="assets/img/compass.svg" alt="" className={styles.x}/>
            <p>vf</p>
          </div>
        </div>
        <div className={styles.sun}>
          <div className={styles.sunrise}>
            <p>Восход</p>
            <img src="" alt="" />
          </div>
          <div className={styles.sunrise}>
            <p>Закат</p>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;