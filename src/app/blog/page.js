import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import { ChevronRight, Calendar, ArrowLeft } from 'lucide-react';
import styles from '../page.module.css';

export const metadata = {
  title: 'Blog | Alanya Özel Ders',
  description: 'Eğitim, LGS, YKS, Teknofest ve özel ders hakkında faydalı bilgiler, ipuçları ve güncel yazılar.',
};

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <div style={{minHeight: "100vh", backgroundColor: "var(--bg-secondary)"}}>
      <header className="container" style={{backgroundColor: "white"}}>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="Alanya Özel Ders Logo" style={{height: "50px", width: "auto", objectFit: "contain"}} />
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>Alanya <span style={{color: "var(--primary)"}}>Özel Ders</span></span>
              <span className={styles.logoSubtitle}>alanyaozelders.com</span>
            </div>
          </Link>
          
          <div className={styles.navLinks}>
            <Link href="/#anasayfa" className={styles.navLink}>Ana Sayfa</Link>
            <Link href="/#hizmetler" className={styles.navLink}>Hizmetler</Link>
            <Link href="/blog" className={`${styles.navLink} ${styles.navLinkActive}`}>Blog</Link>
            <Link href="/#iletisim" className={styles.navLink}>İletişim</Link>
          </div>
        </nav>
      </header>

      <main className="container" style={{padding: "4rem 0"}}>
        <div style={{marginBottom: "3rem"}}>
          <Link href="/" style={{display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", marginBottom: "1rem", fontWeight: "500"}}>
            <ArrowLeft size={18} /> Ana Sayfaya Dön
          </Link>
          <h1 className="section-title">Eğitim Blogu</h1>
          <p className="section-subtitle" style={{textAlign: "left", margin: "0"}}>
            Öğrencilerimiz ve velilerimiz için rehber niteliğinde yazılar, başarı hikayeleri ve uzman tavsiyeleri.
          </p>
        </div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem"}}>
          {allPostsData.map(({ id, date, title, description }) => (
            <Link href={`/blog/${id}`} key={id} style={{textDecoration: "none"}}>
              <div className={styles.serviceCard} style={{height: "100%", padding: "2rem"}}>
                <div style={{display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1rem"}}>
                  <Calendar size={16} />
                  <time dateTime={date}>{new Date(date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                </div>
                <h2 style={{fontSize: "1.4rem", marginBottom: "1rem", color: "var(--text-main)", fontFamily: "Outfit"}}>{title}</h2>
                <p style={{color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "2rem"}}>{description}</p>
                <div style={{color: "var(--primary)", fontWeight: "600", display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "auto"}}>
                  Yazıyı Oku <ChevronRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
