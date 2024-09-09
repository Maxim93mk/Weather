import styles from './DateCard.module.css'

function DateCard(props) {
  return (
    <>
        <div className={styles.date}>
          <p className={styles.city}>Санкт-Петербург</p>
          <p className={styles.currentTime}>22:22</p>
          <p className={styles.currentDay}>22:22</p>
        </div>
    </>
  );
}

export default DateCard;