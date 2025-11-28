import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: 'Hizmet Bulunamadı | Uzman Elektrik',
        };
    }

    return {
        title: `${service.title} | Uzman Elektrik`,
        description: service.description,
    };
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                />
            </div>

            <h1 className={styles.title}>{service.title}</h1>

            <p className={styles.description}>{service.description}</p>

            <div className={styles.details}>
                <p>{service.details}</p>
            </div>

            <div className={styles.cta}>
                <h3>Hemen Hizmet Alın</h3>
                <a href="tel:05375154225" className="btn">
                    📞 0537 515 42 25
                </a>
                <br />
                <Link href="/" className={styles.backLink}>
                    &larr; Ana Sayfaya Dön
                </Link>
            </div>
        </div>
    );
}
