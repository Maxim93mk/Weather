import styles from './WeatherCard.module.css';
import TempBlock from '../temp-block/TempBlock';
import WeatherConditionsBlock from '../weather-conditions-block/WeatherConditionsBlock';
import SunBlock from '../sun-block/SunBlock';

function WeatherCard(props) {

  const customRound=(value, decimals)=> {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }

  return (
    <>
      <div className={styles.card}>
        <TempBlock
          main={props.main}
          sys={props.sys}
          imgURL={props.imgURL} />
        <WeatherConditionsBlock wind={props.wind}
          humidity={props.main.humidity}
          pressure={props.main.pressure} 
          customRound={customRound}/>
        <SunBlock sunrise={props.sys.sunrise}
          sunset={props.sys.sunset} />
      </div>
    </>
  );
}

export default WeatherCard;