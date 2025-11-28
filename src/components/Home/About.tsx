import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={`container ${styles.aboutContainer}`}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/about.jpg"
                        alt="Uzman Elektrik Hakkımızda"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.content}>
                    <h2>Hakkımızda</h2>
                    <p>
                        Uzman Elektrik olarak, yılların verdiği tecrübe ve uzman kadromuzla İstanbul genelinde
                        profesyonel elektrik hizmetleri sunmaktayız. Müşteri memnuniyetini her zaman ön planda
                        tutarak, güvenilir ve kaliteli çözümler üretiyoruz.
                    </p>
                    <p>
                        Elektrik arızalarından tesisat yenilemeye, avize montajından uydu sistemlerine kadar
                        geniş bir yelpazede hizmet veriyoruz. 7/24 acil servisimizle her an yanınızdayız.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <span>✓</span> 7/24 Acil Servis
                        </div>
                        <div className={styles.feature}>
                            <span>✓</span> Uzman Kadro
                        </div>
                        <div className={styles.feature}>
                            <span>✓</span> Garantili İşçilik
                        </div>
                        <div className={styles.feature}>
                            <span>✓</span> Uygun Fiyat
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
