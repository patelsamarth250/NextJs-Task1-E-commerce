import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        Please go to <Link href='/category'>/category</Link> for my work!
      </div>
    </main>
  )
}
