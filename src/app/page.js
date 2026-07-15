"use client";

import { motion } from "framer-motion";
import { 
  Calculator, 
  Rocket, 
  Cpu, 
  Target, 
  ChevronRight, 
  PhoneCall, 
  Users, 
  CheckCircle2, 
  Calendar, 
  Trophy, 
  Star, 
  GraduationCap, 
  MessageCircle
} from "lucide-react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const WHATSAPP_LINK = "https://wa.me/905332526620?text=Merhaba,%20eğitimleriniz%20hakkında%20bilgi%20almak%20istiyorum.";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <>
      <header className="container">
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Alanya Özel Ders Logo" style={{height: "50px", width: "auto", objectFit: "contain"}} />
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>Alanya <span style={{color: "var(--primary)"}}>Özel Ders</span></span>
              <span className={styles.logoSubtitle}>alanyaozelders.com</span>
            </div>
          </div>
          
          <div className={styles.navLinks}>
            <a href="#anasayfa" className={`${styles.navLink} ${styles.navLinkActive}`}>Ana Sayfa</a>
            <a href="#hizmetler" className={styles.navLink}>Hizmetler</a>
            <a href="#hakkimizda" className={styles.navLink}>Hakkımızda</a>
            <a href="#avantajlarimiz" className={styles.navLink}>Avantajlarımız</a>
            <a href="/blog" className={styles.navLink}>Blog</a>
            <a href="#iletisim" className={styles.navLink}>İletişim</a>
          </div>

          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={`btn btn-primary ${styles.navbarWhatsappBtn}`}>
            <MessageCircle size={18} /> WhatsApp ile İletişime Geç
          </a>
        </nav>
      </header>

      <section id="anasayfa" className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <motion.div className={styles.heroContent} {...fadeIn}>
            <h1 className={styles.heroTitle}>
              Alanya Matematik Özel Ders<br/>& Teknofest Koçluğu
            </h1>
            <p className={styles.heroDesc}>
              Matematik Özel Ders, Robotik Kodlama ve Teknofest Danışmanlığı! Şampiyon mentorlarımızla akademik ve teknolojik hedeflerinize doğrudan ulaşın.
            </p>
            
            <div className={styles.heroBadges}>
              <div className={styles.heroBadge}><Users className={styles.heroBadgeIcon} size={18}/> Uzman Kadro</div>
              <div className={styles.heroBadge}><Users className={styles.heroBadgeIcon} size={18}/> Birebir Eğitim</div>
              <div className={styles.heroBadge}><CheckCircle2 className={styles.heroBadgeIcon} size={18}/> Sonuç Odaklı</div>
              <div className={styles.heroBadge}><Calendar className={styles.heroBadgeIcon} size={18}/> Esnek Randevu</div>
            </div>

            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem"}}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-primary" style={{borderRadius: "2rem", padding: "1rem 2rem", fontSize: "1.1rem"}}>
                <MessageCircle size={20} /> Hemen İletişime Geçin
              </a>
              <span style={{fontSize: "0.85rem", color: "var(--text-muted)"}}>Tüm görüşmeler WhatsApp üzerinden yapılmaktadır.</span>
            </div>
          </motion.div>

          <motion.div 
            className={styles.heroImageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.heroImageBlob}></div>
            <Image src="/hero-img.png" alt="Eğitim Teknolojileri" width={500} height={500} className={styles.heroImage} priority />
          </motion.div>
        </div>
      </section>

      <section id="hizmetler" className="section" style={{background: "#fdfdfd"}}>
        <div className="container">
          <div className={styles.sectionTitleContainer}>
            <div className={styles.sectionLabel}>HİZMETLERİMİZ</div>
            <h2 className="section-title" style={{marginBottom: "0.5rem"}}>Başarıya Giden Yol Haritanız</h2>
            <p className="section-subtitle">İhtiyaçlarınıza özel hazırlanan eğitim programlarımızla potansiyelinizi en üst seviyeye çıkarıyoruz.</p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Service 1 */}
            <motion.div className={styles.serviceCard} whileHover={{ y: -5 }}>
              <div className={styles.serviceIconWrapper}>
                <Calculator size={32} />
              </div>
              <h3 className={styles.serviceTitle}>Matematik Özel Ders</h3>
              <div className={styles.serviceSubtitle}>LGS, YKS, Okul Takviye</div>
              <p className={styles.serviceDesc}>Temelden ileri seviyeye, sınav odaklı ve okul takviye matematik eğitimi ile başarıya ulaşın.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={styles.serviceArrowBtn}>
                <ChevronRight size={20} />
              </a>
            </motion.div>

            {/* Service 2 */}
            <motion.div className={styles.serviceCard} whileHover={{ y: -5 }}>
              <div className={styles.serviceIconWrapper} style={{background: "var(--primary)", color: "white"}}>
                <Rocket size={32} />
              </div>
              <h3 className={styles.serviceTitle}>Teknofest Koçluğu</h3>
              <div className={styles.serviceSubtitle}>Şampiyonlarla Zirveye</div>
              <p className={styles.serviceDesc}>Teknofest 1.leri ile birebir mentörlük. Projelerinizi birlikte geliştirip yarışmalarda fark yaratın.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={styles.serviceArrowBtn}>
                <ChevronRight size={20} />
              </a>
            </motion.div>

            {/* Service 3 */}
            <motion.div className={styles.serviceCard} whileHover={{ y: -5 }}>
              <div className={styles.serviceIconWrapper}>
                <Cpu size={32} />
              </div>
              <h3 className={styles.serviceTitle}>Robotik Kodlama<br/>Eğitimleri</h3>
              <div className={styles.serviceSubtitle}>Geleceği Kodlayan Nesiller</div>
              <p className={styles.serviceDesc}>Çocuklar ve gençler için robotik kodlama eğitimleri ile teknoloji üreten bireyler yetiştiriyoruz.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={styles.serviceArrowBtn}>
                <ChevronRight size={20} />
              </a>
            </motion.div>

            {/* Service 4 */}
            <motion.div className={styles.serviceCard} whileHover={{ y: -5 }}>
              <div className={styles.serviceIconWrapper}>
                <Target size={32} />
              </div>
              <h3 className={styles.serviceTitle}>Proje Danışmanlığı<br/>ve Eğitim Koçluğu</h3>
              <div className={styles.serviceSubtitle}>Planla, Uygula, Başar!</div>
              <p className={styles.serviceDesc}>Akademik planlama, proje danışmanlığı ve eğitim koçluğu ile hedeflerinize odaklanın.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={styles.serviceArrowBtn}>
                <ChevronRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="section" style={{background: "white", paddingBottom: "2rem"}}>
        <div className="container" style={{textAlign: "center", maxWidth: "800px"}}>
          <h2 className="section-title" style={{marginBottom: "1rem"}}>Hakkımızda</h2>
          <p className="section-subtitle" style={{color: "var(--text-main)", fontSize: "1.1rem"}}>
            Alanya Özel Ders olarak, yılların getirdiği eğitim tecrübemiz ve şampiyonlardan oluşan kadromuzla öğrencilerimizin akademik hayatlarına dokunuyoruz. Ezberci eğitimden uzak, tamamen öğrencinin potansiyelini keşfetmeye yönelik birebir koçluk sistemimizle, onları geleceğin teknoloji liderleri ve başarılı profesyonelleri olmaya hazırlıyoruz.
          </p>
        </div>
      </section>

      <section id="avantajlarimiz" className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><Trophy size={36}/></div>
              <div className={styles.statContent}>
                <div className={styles.statValue}>%100</div>
                <div className={styles.statTitle}>Başarı Odaklı Eğitim</div>
                <div className={styles.statDesc}>Öğrenci Memnuniyeti</div>
              </div>
            </div>
            
            <div className={styles.statItem}>
              <div className={styles.statIcon}><Star size={36}/></div>
              <div className={styles.statContent}>
                <div className={styles.statValue}>1</div>
                <div className={styles.statTitle}>Teknofest 1.liği</div>
                <div className={styles.statDesc}>Gurur Tablomuz</div>
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statIcon}><GraduationCap size={36}/></div>
              <div className={styles.statContent}>
                <div className={styles.statValue}>50+</div>
                <div className={styles.statTitle}>Başarılı Öğrenci</div>
                <div className={styles.statDesc}>Güçlü Referanslarımız</div>
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statIcon}><Target size={36}/></div>
              <div className={styles.statContent}>
                <div className={styles.statValue}>15+</div>
                <div className={styles.statTitle}>Yürütülen Proje</div>
                <div className={styles.statDesc}>Başarıya Ulaşan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="container">
        <div className={styles.ctaBanner}>
          <div className={styles.ctaBannerContent}>
            <h2 className={styles.ctaBannerTitle}>Başarıya Bir Adım Uzaktasın!</h2>
            <p className={styles.ctaBannerDesc}>Hemen WhatsApp üzerinden bizimle iletişime geç, sana en uygun<br/>öğretmen ve programı birlikte belirleyelim.</p>
          </div>
          
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={styles.ctaBannerBtn}>
            <MessageCircle size={24} /> Hemen İletişime Geçin
          </a>
          <div className={styles.ctaBannerSubtext}>
            Randevunuzu WhatsApp'tan Alın
          </div>
        </div>
      </section>

      <footer className="container">
        <div className={styles.footer}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Alanya Özel Ders Logo" style={{height: "40px", width: "auto", objectFit: "contain"}} />
            <div className={styles.logoText}>
              <span className={styles.logoTitle} style={{fontSize: "1.1rem"}}>Alanya <span style={{color: "var(--primary)"}}>Özel Ders</span></span>
              <span className={styles.logoSubtitle}>alanyaozelders.com</span>
            </div>
          </div>
          
          <div className={styles.navLinks} style={{fontSize: "0.9rem", color: "var(--text-muted)"}}>
            <a href="#hakkimizda" className={styles.navLink}>Hakkımızda</a>
            <a href="#hizmetler" className={styles.navLink}>Hizmetler</a>
            <a href="#avantajlarimiz" className={styles.navLink}>Avantajlarımız</a>
            <a href="/blog" className={styles.navLink}>Blog</a>
            <a href="#iletisim" className={styles.navLink}>İletişim</a>
          </div>

          <div className={styles.socialLinks}>
            <span style={{fontWeight: "bold", fontSize: "1.1rem"}}>IG</span>
            <span style={{fontWeight: "bold", fontSize: "1.1rem"}}>YT</span>
            <span style={{fontWeight: "bold", fontSize: "1.1rem"}}>TK</span> 
          </div>
        </div>
      </footer>
    </>
  );
}
