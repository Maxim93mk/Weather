import styles from './Main.module.css';
import DateCard from '../date-card/DateCard';
// import CurrentWeatherCard from '../current-weather-card/CurrentWeatherCard';
import WeatherNextDayCard from '../weather-next-day-card/WeatherNextDayCard';
import WeatherCard from '../weather-card/WeatherCard';
import MapCard from '../map-card/MapCard';


function Main(props) {
  // console.log(props);
  // const getCurrentDate = new Date();
  // const currentTime = getCurrentDate.getTime();
  // const getTimeZoneTime = new Date(currentTime + (props.timezone * 1000));
  // const timeZoneDate = getTimeZoneTime.getUTCDate();
  // const arrDayWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  // const timeZoneDayWeek = arrDayWeek[getTimeZoneTime.getUTCDay()];
  // const arrDayMounth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  // const timeZoneMonth = arrDayMounth[getTimeZoneTime.getUTCMonth()];
  // const timeZoneYear = getTimeZoneTime.getUTCFullYear();
  // const timeZoneHours = getTimeZoneTime.getUTCHours();
  // const timeZoneMinutes = getTimeZoneTime.getUTCMinutes();

  // const currenrTimeZoneDate = `${timeZoneDate} ${timeZoneMonth}  ${timeZoneYear}, ${timeZoneDayWeek}`;

  return (
    <>
      <main className={styles.main}>
        <section className={styles.upSection}>
          <div className={styles.leftBlock}>
            <DateCard lon={props.coord.lon}
              lat={props.coord.lat}
              icon={props.weather[0].icon}
              name={props.name}
              timezone={props.timezone} />
          </div>
          <div className={styles.rightBlock}>
            <MapCard />
          </div>
        </section>
        <section className={styles.downSection}>
          <div className={styles.leftBlock}>
            <WeatherCard />
          </div>
          {/* <CurrentWeatherCard id={props.id}
            coord={props.coord}
            weather={props.weather}
            name={props.name}
            wind={props.wind}
            main={props.main}
            sys={props.sys}
            timezone={props.timezone}/> */}
          <div className={styles.rightBlock}>
            <WeatherNextDayCard />
            <WeatherNextDayCard />
            <WeatherNextDayCard />
            <WeatherNextDayCard />
            <WeatherNextDayCard />
          </div>

        </section>
      </main>
    </>
  );
}

export default Main;