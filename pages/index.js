import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Professional Portfolio</title>
        <meta name="description" content="Professional AI Systems Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Professional Portfolio
        </h1>

        <p className={styles.description}>
          AI Systems Engineer - Enterprise Solutions
        </p>

        <div className={styles.grid}>
          <a href="#projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Explore production-ready AI systems</p>
          </a>

          <a href="#skills" className={styles.card}>
            <h2>Skills &rarr;</h2>
            <p>Technical expertise and capabilities</p>
          </a>

          <a href="#contact" className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>Get in touch for collaboration</p>
          </a>

          <a href="#about" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Background and experience</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 - Professional Portfolio</p>
      </footer>
    </div>
  )
}
