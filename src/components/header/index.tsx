import Image from "next/image"
import Link from "next/link"
import styles from "./style.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="wrapper">
          <div className={styles.block}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/logos/caneroren-logo@2x.png"
                alt="Caner Ören"
                fill={true}
              />
            </Link>
            <nav className={styles.menu}>
              <ul>
                <li>
                  <Link href="/">Anasayfa</Link>
                </li>
                <li>
                  <Link href="/">Projeler</Link>
                </li>
                <li>
                  <Link href="/">Yazılar</Link>
                </li>
                <li>
                  <Link href="/">Kaydedilenler</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
