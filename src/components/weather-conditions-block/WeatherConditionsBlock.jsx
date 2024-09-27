import styles from './WeatherConditionsBlock.module.css';
import { useState } from 'react';

function WeatherConditionsBlock(props) {
  const pressure = props.customRound(props.pressure * 0.75, 2);
  const deg = Number(props.wind.deg);
  const degDescr = props.getDescrWindDeg(deg);
  const windSpeed = props.getUnitsFlag ? props.customRound(props.wind.speed * 0.44704, 2) : props.wind.speed;

  return (
    <>
      <div className={styles.block}>
        <div className={styles.wind}>
          <img src="assets/img/windsock.svg" alt="Скорость ветра" />
          <p className='descrText'>{windSpeed} м/с</p>
        </div>
        <div className={styles.wind}>
          <div className={styles.windImg}>
            <img src="assets/img/compassArr1.svg"
              alt="Направление ветра"
              style={{ transform: `rotate(${deg}deg)` }} />
          </div>
          <p className='descrText'>{degDescr}</p>
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