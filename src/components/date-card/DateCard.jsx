import styles from './DateCard.module.css'

function DateCard(props) {
  return (
    <>
      <div className={styles.date}>
        <div className={styles.up}>
          <div className={styles.cityBlock}>
            <img src='assets/img/navigation.svg' alt="iconNavigation" className={styles.icon} />
            <p className={styles.city}>{props.name}</p>
          </div>
          <div className={styles.coordBlock}>
            <p className={styles.coord}>Долгота: {props.lon}°</p>
            <p className={styles.coord}>Широта: {props.lat}°</p>
          </div>
        </div>
        <div className={styles.down}>
          <p className={styles.currentTime}>{props.timeZoneHours}:{props.timeZoneMinutes}</p>
          <p className={styles.currentDate}>{props.timeZoneDate}</p>
        </div>
      </div>
    </>
  );
}

export default DateCard;