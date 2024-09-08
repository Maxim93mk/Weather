import styles from './Header.module.css'


function Header() {
  return (
    <>
      <header>
        <div className="wrapper">
          <section className={styles.header}>
            <h1 className={styles.title}>Погода</h1>
            <div className={styles.searchBlock}>
              <input type="text"
                className={styles.searchInput}
                placeholder='Введите название города...' />
              <button className={styles.searchBtn}></button>
            </div>
          </section>
        </div>
      </header>
    </>
  );
}

export default Header;