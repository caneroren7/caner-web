import Link from "next/link"
import styles from "./style.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.block}>
          <h4 className={styles.title}>Bağlantılar</h4>
          <nav className={styles.menu}>
            <ul>
              <li>
                <Link href="/" target="_blank">Instagram</Link>
              </li>
              <li>
                <Link href="/" target="_blank">Twitter</Link>
              </li>
              <li>
                <Link href="/" target="_blank">Github</Link>
              </li>
              <li>
                <Link href="/" target="_blank">Youtube</Link>
              </li>
              <li>
                <Link href="/" target="_blank">E-Mail</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
