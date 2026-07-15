import './globals.css';

export const metadata = {
  title: 'Alanya Özel Ders & Teknofest Koçluğu | LGS, YKS, Matematik',
  description: 'Alanya\'da matematik özel ders, robotik kodlama, yazılım, ingilizce eğitimi, proje danışmanlığı ve Teknofest 1.leri ile birebir Teknofest Koçluğu.',
  keywords: 'alanya özel ders, alanya matematik özel ders, alanya yazılım, alanya kodlama eğitimi, alanya ingilizce eğitim, alanya ingilizce özel ders, teknofest koçluğu, robotik kodlama alanya, alanya lgs matematik, alanya yks özel ders',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main>
          {children}
        </main>
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/905332526620?text=Merhaba,%20özel%20ders/koçluk%20hakkında%20bilgi%20almak%20istiyorum." 
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile İletişime Geçin"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
      </body>
    </html>
  );
}
