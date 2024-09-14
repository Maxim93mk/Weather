import styles from './MapCard.module.css';

function MapCard() {

  return (
    <>
      <div className={styles.card}>
        <iframe className={styles.map} 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17904.343223947235!2d48.555622400000004!3d55.8792704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1726314478574!5m2!1sru!2sru" 
         loading="lazy" ></iframe>
      </div>
    </>
  );
}

export default MapCard;