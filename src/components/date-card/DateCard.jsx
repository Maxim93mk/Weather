import styles from './DateCard.module.css'

function DateCard(props) {
  return (
    <>
      <div className={styles.date}>
        <div className={styles.up}>
          <div className={styles.cityBlock}>
            <p className={styles.city}>{props.name}</p>
            {/* <img src={props.icon} alt="icon flag" className={styles.icon} /> */}
          </div>
          <div className={styles.coordBlock}>
            <p className={styles.lon}>Долгота: {props.lon}°</p>
            <p className={styles.lat}>Широта: {props.lat}°</p>
          </div>
        </div>
        <div className={styles.down}>
          <p className={styles.currentTime}>22:22</p>
          <p className={styles.currentDay}>22:22</p>
        </div>
      </div>
    </>
  );
}

export default DateCard;