import styles from './WeatherConditionsBlock.module.css';

function WeatherConditionsBlock() {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.wind}>
          <img src="assets/img/windsock.svg" alt="" />
          <p className='descrText'>4.29 м/с</p>
        </div>
        <div className={styles.wind}>
          <img src="assets/img/compass.svg" alt="" />
          <p className='descrText'>ЮЗ</p>
        </div>
        <div className={styles.wind}>
          <img src="assets/img/humidity.svg" alt="" />
          <p className='descrText'>100%</p>
        </div>
        <div className={styles.wind}>
          <img src="assets/img/barometer.svg" alt="" />
          <p className='descrText'>1000 мм рт. ст.</p>
        </div>
      </div>

    </>
  );
}

export default WeatherConditionsBlock;