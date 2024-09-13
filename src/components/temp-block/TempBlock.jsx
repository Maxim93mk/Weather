import styles from './TempBlock.module.css'

function TempBlock() {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.temperature}>

          <p className={styles.currentTempValue}>+25°C</p>
          <div className={styles.condition}>
            <img src="assets/img/clear-day.svg" alt="Погодные условия" />
            <p className={styles.textDescr}>Пасмурно</p>
          </div>
          <p className={styles.textDescr}>Ощущается как +23°C</p>
        </div>
        <div className={styles.minmaxTempBlock}>
          <div className={styles.minmaxTemp}>
            <img src="assets/img/thermometer-colder.svg" alt="Минимальная температура" />
            <p className={styles.textDescr}>Мин. 23°C</p>
          </div>
          <div className={styles.minmaxTemp}>
            <img src="assets/img/thermometer-warmer.svg" alt="Максимальная температура" />
            <p className={styles.textDescr}>Maкс. 23°C</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TempBlock;