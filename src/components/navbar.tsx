// components/navbar.tsx
import React from 'react';
import Image from 'next/image'; // Import the Image component
import Link from 'next/link'; // Import the Link component
import logoImage from '../images/YasminLogo.png'; // Adjust the path as needed
import styles from '../styles/navbar.module.css'; // Import your CSS module

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src={logoImage}
          alt="Yasmin Logo"
        />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/login">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
