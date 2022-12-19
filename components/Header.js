import styles from "../styles/Header.module.css"
import Link from "next/link"

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.base}>
				<button className={styles.profil}>mon profil</button>
				<h1 className={styles.title}>Le mulot</h1>
				<button className={styles.logout}>logout</button>
			</div>
			<div className={styles.linkContainer}>
				<button className={styles.link}>
					<Link href="/new">
						<span>Nouvelles demandes</span>
					</Link>
				</button>
				<button className={styles.link}>
					<Link href="/">
						<span>Demandes suivies</span>
					</Link>
				</button>
				<button className={styles.link}>
					<Link href="/tutoriels">
						<span>Tutoriels</span>
					</Link>
				</button>
			</div>
		</header>
	)
}

export default Header
