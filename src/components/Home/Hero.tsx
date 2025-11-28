import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Profesyonel Elektrik Çözümleri</h1>
                <p>İstanbul&apos;un her yerine 7/24 acil elektrik servisi. Güvenilir, hızlı ve garantili hizmet.</p>
                <div className={styles.heroButtons}>
                    <a href="tel:05375154225" className="btn">Hemen Ara: 0537 515 42 25</a>
                    <Link href="/#services" className="btn btn-secondary">Hizmetlerimiz</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
