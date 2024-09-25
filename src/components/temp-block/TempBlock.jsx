import styles from './TempBlock.module.css'

function TempBlock(props) {
const currentTemp = props.customRound(Number(props.main.temp), 0);
const feelTemp = props.customRound(Number(props.main.feels_like), 0);
const minTemp = props.customRound(Number(props.main.temp_min), 0);
const maxTemp = props.customRound(Number(props.main.temp_max), 0);
const imgURL = 'http://openweathermap.org/img/w/' + props.icon + '.png';


  return (
    <>
      <div className={styles.main}>
        <div className={styles.temperature}>
          <p className={styles.currentTempValue}>{currentTemp}°C</p>
          <div className={styles.condition}>
            <img src={imgURL} alt="Погодные условия" />
            <p className={styles.textDescr}>{props.iconDescr}</p>
          </div>
          <p className={styles.textDescr}>Ощущается как {feelTemp}°C</p>
        </div>
        <div className={styles.minmaxTempBlock}>
          <div className={styles.minmaxTemp}>
            <img src="assets/img/thermometer-colder.svg" alt="Минимальная температура" />
            <p className={styles.textDescr}>Мин. {minTemp}°C</p>
          </div>
          <div className={styles.minmaxTemp}>
            <img src="assets/img/thermometer-warmer.svg" alt="Максимальная температура" />
            <p className={styles.textDescr}>Макс. {maxTemp}°C</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TempBlock;