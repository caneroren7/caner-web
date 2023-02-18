import Link from "next/link"
import { ReactNode } from "react"
import styles from "./style.module.scss"

export interface SkillCardProps {
  icon?: ReactNode,
  title?: string,
  subTitle?: string,
  desc?: string,
  url?: string
}

export default function SkillCard(props: SkillCardProps) {

  const {
    icon,
    title,
    subTitle,
    desc,
    url
  } = props

  return (
    <div className={styles.skillCard}>
      <div className={styles.icon}>{icon}</div>
      <h4 className={styles.title}>{title} {subTitle && <span className={styles.subTitle}>-{subTitle}-</span>}</h4>
      <p className={styles.desc}>{desc}</p>
      <Link href={{ pathname: url }} className={styles.detail}>Detaylı Bilgi</Link>
    </div>
  )
}
