import styles from './WeatherCard.module.css';
import TempBlock from '../temp-block/TempBlock';
import WeatherConditionsBlock from '../weather-conditions-block/WeatherConditionsBlock';
function WeatherCard(props) {

  return (
    <>
      <div className={styles.main}>
        <TempBlock/>
       <WeatherConditionsBlock/>
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