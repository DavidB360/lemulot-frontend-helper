import { useState } from "react"
import styles from "../styles/Header.module.css"
import Follow from "./Follow"
import Tutorials from "./Tutorials"
import Demands from "./Demands"

function Header() {
	const [link, setLink] = useState(true)
	const [link1, setLink1] = useState(false)
	const [link2, setLink2] = useState(false)

	return (
		<div>
			<header className={styles.header}>
				<div className={styles.base}>
					<button className={styles.profil}>mon profil</button>
					<h1 className={styles.title}>Le mulot</h1>
					<button className={styles.logout}>logout</button>
				</div>
				<div className={styles.linkContainer}>
					{/* au onewlick aller sur le composant enfant */}
					<button
						className={`${styles.link1} ${styles.link}`}
						onClick={() => {
							setLink(true)
							setLink1(false)
							setLink2(false)
						}}
					>
						Nouvelles demandes
					</button>
					<button
						className={`${styles.link2} ${styles.link}`}
						onClick={() => {
							setLink(false)
							setLink1(true)
							setLink2(false)
						}}
					>
						Demandes suivies
					</button>
					<button
						className={`${styles.link3} ${styles.link}`}
						onClick={() => {
							setLink(false)
							setLink1(false)
							setLink2(true)
						}}
					>
						Tutoriels
					</button>
				</div>
			</header>
			<div>
				<Demands show={link} />
				<Follow show={link1} />
				<Tutorials show={link2} />
			</div>
		</div>
	)
}

export default Header
