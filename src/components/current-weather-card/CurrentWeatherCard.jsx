import styles from './CurrentWeatherCard.module.css';
import DateCard from '../date-card/DateCard';
import WeatherCard from '../weather-card/WeatherCard';

function CurrentWeatherCard(props) {
console.log(props)
const getCurrentDate = new Date();
const currentTime = getCurrentDate.getTime();
const getTimeZoneTime = new Date(currentTime + (props.timezone*1000));
const timeZoneDate = getTimeZoneTime.getUTCDate();
const arrDayWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const timeZoneDayWeek = arrDayWeek[getTimeZoneTime.getUTCDay()];
const arrDayMounth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const timeZoneMonth = arrDayMounth[getTimeZoneTime.getUTCMonth()];
const timeZoneYear = getTimeZoneTime.getUTCFullYear();
const timeZoneHours = getTimeZoneTime.getUTCHours();
const timeZoneMinutes = getTimeZoneTime.getUTCMinutes();

const currenrTimeZoneDate = `${timeZoneDate} ${timeZoneMonth}  ${timeZoneYear}, ${timeZoneDayWeek}`;
// var d = new Date(new Date().getTime() + (props.timezone * 1000));
//             var hrs = d.getUTCHours();
//             var mins = d.getUTCMinutes();
//             console.log(hrs + ":" + mins + ":" + secs)

  return (
    <>
      <main>
        <section className={styles.main}>
          <DateCard lon={props.coord.lon}
                    lat={props.coord.lat}
                    icon = {props.weather[0].icon}
                    name = {props.name}
                    timeZoneHours = {timeZoneHours}
                    timeZoneMinutes = {timeZoneMinutes}
                    timeZoneDate = {currenrTimeZoneDate}/>
          <WeatherCard />
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
        </section>

      </main>
    </>
  );
}

export default CurrentWeatherCard;