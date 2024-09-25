import styles from './WeatherNextDayCard.module.css';

function WeatherNextDayCard(props) {

  return (
    <>
      <div className={styles.card}>
        <p className={styles.temperature}>+23°C</p>
        <p className={styles.feelTemperature}>Ощущается как +23°C</p>
        <img src="assets/img/partly-cloudy-day.svg" alt="Погодне условия" />
        <p className={styles.descrCondition}>Облачно</p>
        <p className={styles.date}>14.09.2024</p>
      </div>
    </>
  );
}

export default WeatherNextDayCard;