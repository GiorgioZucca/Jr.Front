import styles from "./Header.module.css"

function Header() {
    return(
        <header className={styles.header}>
        <div className={styles.headerBrand}>
          <img src="/logo.png" alt="Company Logo" className={styles.headerLogo}/>
        </div>
        <nav className={styles.headerNav}>
          <a href="/" className={styles.navLink}>Ínicio</a>
          <a href="/" className={styles.navLink}>Sobre nós</a>
          <a href="/" className={styles.navLink}>Contate-nos</a>
          <a href="/" className={styles.navLink}>Cadastre</a>
        </nav>
      </header>
    )

}

export default Header