"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.png" alt="Uzman Elektrik Logo" width={50} height={50} />
          <span>Uzman Elektrik</span>
        </Link>

        <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
          ☰
        </div>

        <nav className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.navLink} onClick={() => setIsOpen(false)}>Ana Sayfa</Link>
          <Link href="/#services" className={styles.navLink} onClick={() => setIsOpen(false)}>Hizmetlerimiz</Link>
          <Link href="/#about" className={styles.navLink} onClick={() => setIsOpen(false)}>Hakkımızda</Link>
          <Link href="/#contact" className={styles.navLink} onClick={() => setIsOpen(false)}>İletişim</Link>
        </nav>

        <a href="tel:05375154225" className={styles.contactBtn}>
          📞 0537 515 42 25
        </a>
      </div>
    </header>
  );
};

export default Navbar;
