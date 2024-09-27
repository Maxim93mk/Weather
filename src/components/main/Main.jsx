import styles from './Main.module.css';
import DateCard from '../date-card/DateCard';
// import CurrentWeatherCard from '../current-weather-card/CurrentWeatherCard';
import WeatherNextDayCard from '../weather-next-day-card/WeatherNextDayCard';
import WeatherCard from '../weather-card/WeatherCard';
import MapCard from '../map-card/MapCard';


function Main(props) {

  return (
    <>
      <main className={styles.main}>
        <section className={styles.upSection}>
          <div className={styles.leftBlock}>
            <DateCard lon={props.coord.lon}
              lat={props.coord.lat}
              name={props.name}
              timezone={props.timezone} />
          </div>
          <div className={styles.rightBlock}>
            <MapCard />
          </div>
        </section>
        <section className={styles.downSection}>
          <div className={styles.leftBlock}>
            <WeatherCard wind={props.wind}
              main={props.main}
              sys={props.sys}
              weather={props.weather[0]} 
              getUnitsFlag = {props.getUnitsFlag}/>
          </div>
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