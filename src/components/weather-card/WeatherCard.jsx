import styles from './WeatherCard.module.css';

function WeatherCard(props) {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.currentTemp}>
          <p>23°C</p>
          <img src="" alt="" />
          <p>Ощущается как 23°C</p>
        </div>
        <div className={styles.minmaxTempBlock}>
          <div className={styles.minmaxTemp}>
            <p>Мин. 23°C</p>
            <img src="" alt="" />
          </div>
          <div className={styles.minmaxTemp}>
            <p>Maкс. 23°C</p>
            <img src="" alt="" />
          </div>
        </div>
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