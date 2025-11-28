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
                        sizes="(max-width: 992px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.content}>
                    <span className={styles.subTitle}>KURUMSAL</span>
                    <h2>Güvenilir ve Profesyonel Elektrik Çözümleri</h2>
                    <p>
                        Uzman Elektrik olarak, sektördeki deneyimimiz ve sertifikalı uzman kadromuzla,
                        elektrik arıza, bakım ve montaj ihtiyaçlarınıza en hızlı ve en güvenilir çözümleri sunuyoruz.
                    </p>
                    <p>
                        Teknolojiyi yakından takip eden ekibimiz, modern ekipmanlarla donatılmış araçlarımızla
                        7/24 hizmetinizdedir. Müşteri memnuniyeti odaklı çalışma prensibimizle, işimizi
                        garantili ve titizlikle yapıyoruz.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>⚡</div>
                            <div className={styles.featureText}>
                                <h4>7/24 Acil Servis</h4>
                                <p>Günün her saati kesintisiz hizmet.</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>👨‍🔧</div>
                            <div className={styles.featureText}>
                                <h4>Uzman Kadro</h4>
                                <p>Sertifikalı ve deneyimli teknisyenler.</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>🛡️</div>
                            <div className={styles.featureText}>
                                <h4>Garantili İşçilik</h4>
                                <p>Yapılan tüm işlemler garanti kapsamındadır.</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>💰</div>
                            <div className={styles.featureText}>
                                <h4>Uygun Fiyat</h4>
                                <p>Kaliteli hizmet, ekonomik çözümler.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
