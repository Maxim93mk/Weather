import styles from './WeatherCard.module.css';
import TempBlock from '../temp-block/TempBlock';
import WeatherConditionsBlock from '../weather-conditions-block/WeatherConditionsBlock';
import SunBlock from '../sun-block/SunBlock';

function WeatherCard(props) {
  const customRound = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }

  const getDescrWindDeg = (deg) => {
    switch (true) {
      case deg==0:
      case deg==360: return 'С';
      case deg > 0 && deg < 90: return 'СВ';
      case deg==90: return 'В';
      case deg > 90 && deg < 180: return 'ЮВ';
      case deg==180: return 'Ю';
      case deg > 180 && deg < 270: return 'ЮЗ';
      case deg==270: return 'З';
      case deg > 270 && deg < 360: return 'СЗ';
    }
  }

  return (
    <>
      <div className={styles.card}>
        <TempBlock
          main={props.main}
          customRound={customRound}
          icon={props.weather.icon}
          iconDescr={props.weather.description} 
          getUnitsFlag = {props.getUnitsFlag}/>
        <WeatherConditionsBlock wind={props.wind}
          deg={props.wind.deg}
          getDescrWindDeg={getDescrWindDeg}
          humidity={props.main.humidity}
          pressure={props.main.pressure}
          customRound={customRound} 
          getUnitsFlag = {props.getUnitsFlag}/>
        <SunBlock sunrise={props.sys.sunrise}
          sunset={props.sys.sunset} />
      </div>
    </>
  );
}

export default WeatherCard;