import styles from './Sun.module.css';

function SunBlock() {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.wind}>
          <img src="assets/img/sunrise.svg" alt="" />
          <p className='descrText'>05:23</p>
        </div>
        <div className={styles.wind}>
          <img src="assets/img/sunset.svg" alt="" />
          <p className='descrText'>21:21</p>
        </div>
      </div>
    </>
  );
}

export default SunBlock;