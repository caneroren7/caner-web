import styles from "./style.module.scss"

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
    </div>
  )
}
