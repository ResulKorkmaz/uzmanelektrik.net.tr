import Link from 'next/link';
import Image from 'next/image';
import styles from './Services.module.css';
import { services } from '@/data/services';

const Services = () => {
    return (
        <section id="services" className={styles.services}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2>Hizmetlerimiz</h2>
                    <p>Uzman ekibimizle sunduğumuz profesyonel elektrik hizmetleri.</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <Link href={`/hizmetler/${service.slug}`} className={styles.link}>
                                    Detaylı Bilgi &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
