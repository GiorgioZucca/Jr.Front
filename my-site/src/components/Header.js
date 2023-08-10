import styles from "./Header.module.css"
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header className={styles.header}>
        <div className={styles.headerBrand}>
          <img src="/logo.png" alt="Company Logo" className={styles.headerLogo}/>
        </div>
        <nav className={styles.headerNav}>
          <Link to="/">Landing</Link>
        </nav>
      </header>
    )

}

export default Header