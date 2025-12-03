import styles from './FooterStyles.module.css';

export default function Footer() {
  return (
     <section id="footer" className={styles.container}>
        <p>&copy; 2025 Christian James Narag. <br />
           All projects are personal samples, not client work. 
        </p>
     </section>
  );
}
