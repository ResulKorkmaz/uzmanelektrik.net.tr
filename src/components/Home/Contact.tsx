import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <div className={`container ${styles.contactContainer}`}>
                <div className={styles.contactBox}>
                    <h2>İletişime Geçin</h2>
                    <p>
                        Her türlü elektrik arıza, bakım ve montaj işleriniz için bizi arayabilirsiniz.
                        7/24 hizmetinizdeyiz.
                    </p>

                    <a href="tel:05375154225" className={styles.phone}>
                        📞 0537 515 42 25
                    </a>

                    <div className={styles.info}>
                        <div className={styles.infoItem}>
                            <strong>Çalışma Saatleri:</strong> 7 Gün 24 Saat
                        </div>
                        <div className={styles.infoItem}>
                            <strong>Bölge:</strong> Tüm İstanbul
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
