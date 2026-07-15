import Link from 'next/link';
import { getPostData, getSortedPostsData } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import styles from '../../page.module.css';
import './blog.css';

export async function generateMetadata(props) {
  const params = await props.params;
  const postData = getPostData(params.slug);
  
  if (!postData) {
    return { title: 'Yazı Bulunamadı' };
  }

  return {
    title: `${postData.title} | Alanya Özel Ders Blog`,
    description: postData.description,
    keywords: postData.tags ? postData.tags.join(', ') : '',
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPost(props) {
  const params = await props.params;
  const postData = getPostData(params.slug);

  if (!postData) {
    return (
      <div className="container" style={{padding: "4rem 0", textAlign: "center"}}>
        <h1>Yazı Bulunamadı</h1>
        <Link href="/blog" className="btn btn-primary" style={{marginTop: "2rem"}}>Blog'a Dön</Link>
      </div>
    );
  }

  return (
    <div style={{minHeight: "100vh", backgroundColor: "white"}}>
      <header className="container">
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
        <article style={{maxWidth: "800px", margin: "0 auto"}}>
          <Link href="/blog" style={{display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", marginBottom: "2rem", fontWeight: "500"}}>
            <ArrowLeft size={18} /> Tüm Yazılar
          </Link>
          
          <h1 style={{fontSize: "2.5rem", fontFamily: "Outfit", lineHeight: "1.2", marginBottom: "1.5rem", color: "var(--text-main)"}}>
            {postData.title}
          </h1>
          
          <div style={{display: "flex", flexWrap: "wrap", gap: "1.5rem", color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "3rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border-color)"}}>
            <div style={{display: "flex", alignItems: "center", gap: "0.5rem"}}>
              <Calendar size={18} />
              <time dateTime={postData.date}>{new Date(postData.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "0.5rem"}}>
              <User size={18} />
              <span>{postData.author}</span>
            </div>
          </div>

          <div className="blog-content">
            <ReactMarkdown>{postData.content}</ReactMarkdown>
          </div>

          {postData.tags && postData.tags.length > 0 && (
            <div style={{marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)"}}>
              <div style={{display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-main)", fontWeight: "600", marginBottom: "1rem"}}>
                <Tag size={18} /> Etiketler:
              </div>
              <div style={{display: "flex", flexWrap: "wrap", gap: "0.5rem"}}>
                {postData.tags.map(tag => (
                  <span key={tag} style={{background: "var(--bg-secondary)", padding: "0.3rem 0.8rem", borderRadius: "2rem", fontSize: "0.85rem", color: "var(--text-muted)"}}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
    </div>
  );
}
