import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerColumn}>
                    <h3>Uzman Elektrik</h3>
                    <p>
                        Profesyonel elektrik tesisat, tamir ve montaj hizmetleri.
                        7/24 kesintisiz hizmet anlayışıyla yanınızdayız.
                    </p>
                </div>

                <div className={styles.footerColumn}>
                    <h3>Hızlı Bağlantılar</h3>
                    <ul className={styles.footerLinks}>
                        <li><Link href="/">Ana Sayfa</Link></li>
                        <li><Link href="/#services">Hizmetlerimiz</Link></li>
                        <li><Link href="/#about">Hakkımızda</Link></li>
                        <li><Link href="/#contact">İletişim</Link></li>
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h3>İletişim</h3>
                    <div className={styles.contactItem}>
                        <span>📞</span>
                        <a href="tel:05375154225">0537 515 42 25</a>
                    </div>
                    <div className={styles.contactItem}>
                        <span>📧</span>
                        <a href="mailto:info@uzmanelektrik.net.tr">info@uzmanelektrik.net.tr</a>
                    </div>
                    <div className={styles.contactItem}>
                        <span>📍</span>
                        <span>İstanbul, Türkiye</span>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Uzman Elektrik. Tüm hakları saklıdır.
            </div>
        </footer>
    );
};

export default Footer;
