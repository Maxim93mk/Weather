import styles from './SwitchUnitsTemp.module.css'
import { useState } from 'react';



function SwitchUnitsTemp(props) {
  const [flagSwitch, setFlagSwitch] = useState(true);
  const [classUnit, setClassUint] = useState('');
  const stringSearch = props.stringSearch;
  console.log(classUnit, flagSwitch)
    
  

  const getUnitsTemp = () => {
    setFlagSwitch(!flagSwitch);
    flagSwitch ? setClassUint(styles.switchF) : setClassUint(styles.switchC);
    props.axiosData(stringSearch, flagSwitch);
  }
  
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