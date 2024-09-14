import styles from './WeatherCard.module.css';
import TempBlock from '../temp-block/TempBlock';
import WeatherConditionsBlock from '../weather-conditions-block/WeatherConditionsBlock';
import SunBlock from '../sun-block/SunBlock';

function WeatherCard(props) {

  return (
    <>
      <div className={styles.card}>
        <TempBlock />
        <WeatherConditionsBlock />
        <SunBlock />
      </div>
    </>
  );
}

export default WeatherCard;