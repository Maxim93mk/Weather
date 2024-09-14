import styles from './WeatherConditionsBlock.module.css';

function WeatherConditionsBlock(props) {


  const pressure = props.customRound(props.pressure*0.75, 2);

  return (
    <>
      <div className={styles.block}>
        <div className={styles.wind}>
          <img src="assets/img/windsock.svg" alt="Скорость ветра" />
          <p className='descrText'>{props.wind.speed} м/с</p>
        </div>
        <div className={styles.wind}>
          <img src="assets/img/compass.svg" alt="Направление ветра" />
          <p className='descrText'>ЮЗ</p>
        </div>
        <div className={styles.wind}>
          <img src="assets/img/humidity.svg" alt="Влажность" />
          <p className='descrText'>{props.humidity} %</p>
        </div>
        <div className={styles.wind}>
          <img src="assets/img/barometer.svg" alt="Барометр" />
          <p className='descrText'>{pressure} мм рт. ст.</p>
        </div>
      </div>

    </>
  );
}

export default WeatherConditionsBlock;