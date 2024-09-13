import styles from './Main.module.css';
import DateCard from '../date-card/DateCard';
import CurrentWeatherCard from '../current-weather-card/CurrentWeatherCard';

function Main(props) {

  return (
    <>
      <main>
        <section className={styles.main}>
          <CurrentWeatherCard id={props.id}
            coord={props.coord}
            weather={props.weather}
            name={props.name}
            wind={props.wind}
            main={props.main}
            sys={props.sys}
            timezone={props.timezone}/>
        </section>

      </main>
    </>
  );
}

export default Main;