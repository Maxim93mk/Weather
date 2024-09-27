import styles from './SwitchUnitsTemp.module.css'
import { useState } from 'react';



function SwitchUnitsTemp(props) {
  const [flagSwitch, setFlagSwitch] = useState(false);

  const getUnitsTemp = () => {
    setFlagSwitch(flag => !flag);
  }

  const classUnit = flagSwitch ? styles.switchF : styles.switchC;



  return (
    <>
      <div className={styles.unitsTemp}>
        <p className={styles.textDescr}>°C</p>
        <div className={`${styles.switchBtn} ${classUnit}`}
          onClick={() => getUnitsTemp()}>
        </div>
        <p className={styles.textDescr}>°F</p>
      </div>
    </>
  );
}

export default SwitchUnitsTemp;