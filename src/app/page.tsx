import Frontend from "@/icons/frontend-icon.svg"
import UI from "@/icons/component-icon.svg"
import Webflow from "@/icons/webflow-icon.svg"
import Design from "@/icons/design-icon.svg"

import SkillCard from "@/components/skil-card"
import styles from "./style.module.scss"

const skillList = [
  {
    id: 1,
    icon: <Frontend />,
    title: 'Arayüz Geliştirme',
    subTitle: 'Frontend',
    desc: 'html, css, javascript ve yeni teknolojileri kullanarak web uygulamaları veya arayüzleri geliştirebilirim.',
    url: '/'
  },
  {
    id: 1,
    icon: <UI />,
    title: 'Arayüz Geliştirme',
    subTitle: 'UI',
    desc: 'bu aşamada ise sadece html ve css kullanarak pixel perfect componentler veya layoutlar geliştirebilirim.',
    url: '/'
  },
  {
    id: 1,
    icon: <Webflow />,
    title: 'Webflow',
    desc: 'webflow kullanarak tek sayfa veya blog, portfolio vb. işlerinizi geliştirebilirim.',
    url: '/'
  },
  {
    id: 1,
    icon: <Design />,
    title: 'Arayüz Tasarımı',
    desc: 'figma kullanarak web ve mobil kullanıcı arayüzleri tasarlayabilirim.',
    url: '/'
  }
]

export default function Home() {
  return (
    <div className="wrapper">
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>merhaba ben caner 🤟🏼, 23 yaşındayım ve trabzonda yaşıyorum.</h1>
        <p className={styles.heroDesc}>daha çocuk yaşta tutku ile başladığım bu işte yaklaşık 3 yıldır aktif olarak hizmet veriyorum.
          tam 2 yıldır unicrow ekibinde frontend developer görevinde çalışıyorum ve birlikte çok güzel işler çıkartıyoruz.</p>
        <p className={styles.heroSmallDesc}>aynı zamanda freelance işler geliştiriyorum, siz de projelerinizde benim ile beraber çalışmak için iletişim kurabilirsiniz.</p>
        <p className={styles.heroSmallDesc}>geliştirdiğim projeler genellikle pixel perfect oluyor ve müşterilerim bundan dolayı çok memnun. yeni teknolojileri denemeyi ve kullanmayı çok seviyorum. aynı zamanda tasarım tarafına da ilgim bir hayli var, şu anlık sadece hobi olarak tasarım yapıyorum.</p>
      </div>
      <div className={styles.skills}>
        <ul className={styles.skillsCards}>
          {skillList.map((skill) =>
            <li className={styles.skillsCardsItem} key={skill.id}>
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                subTitle={skill.subTitle}
                desc={skill.desc}
                url={skill.url}
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
