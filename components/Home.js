import styles from "../styles/Home.module.css"

function Home() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<text className={styles.title}>Demandes suivies</text>
				<input
					type="search"
					className={styles.inputSearch}
					placeholder="Rechercher"
				></input>
			</div>
		</div>
	)
}

export default Home
