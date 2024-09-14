import styles from './CurrentWeatherCard.module.css';
import DateCard from '../date-card/DateCard';
import WeatherCard from '../weather-card/WeatherCard';

function CurrentWeatherCard(props) {
// var d = new Date(new Date().getTime() + (props.timezone * 1000));
//             var hrs = d.getUTCHours();
//             var mins = d.getUTCMinutes();
//             console.log(hrs + ":" + mins + ":" + secs)

  return (
    <>
        
          
                        {/* <WeatherCard currentTemp={}
                        feelTemp={}
                        minTemp={}
                        maxTemp={}
                        sunrise={}
                        sunset={}
                        pressure={}
                        hummidity={}
                        seaLevel={}
                        /> */}
          {/* <div className={styles.titleBlock}>
            <h2 className={styles.title}>Город: {props.name}222222</h2>
            <img src={props.icon} alt={props.country} className={styles.iconCountry} />
          </div>
          <div className={styles.blockTemp}>
            <div className={styles.currentTemp}>
              <p className={styles.Temp}>22{props.temp}</p>
              <p className={styles.feelTemp}>Ощущается как 22{props.feels_like}</p>
            </div>
            <div className={styles.minTempBlock}>
              <p className={styles.minTemp}>22{props.temp_min}</p>
              <img src={props.icon} alt={props.country} className={styles.iconCountry} />
            </div>
            <div className={styles.minTempBlock}>
              <p className={styles.maxTemp}>22{props.temp_max}</p>
              <img src={props.icon} alt={props.country} className={styles.iconCountry} />
            </div>
          </div>
        <div className={styles.}>
            <div className={styles.currentTemp}>
              <p className={styles.Temp}>22{props.temp}</p>
              <p className={styles.feelTemp}>Ощущается как 22{props.feels_like}</p>
            </div>
            <div className={styles.minTempBlock}>
              <p className={styles.minTemp}>22{props.temp_min}</p>
              <img src={props.icon} alt={props.country} className={styles.iconCountry} />
            </div>
            <div className={styles.minTempBlock}>
              <p className={styles.maxTemp}>22{props.temp_max}</p>
              <img src={props.icon} alt={props.country} className={styles.iconCountry} />
            </div>
          </div> */}
    </>
  );
}

export default CurrentWeatherCard;