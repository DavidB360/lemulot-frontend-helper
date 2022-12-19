import styles from "../styles/New.module.css"

function New() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>Nouvelles demandes</div>
			<input
				type="search"
				className={styles.inputSearch}
				placeholder="Rechercher"
			></input>
		</div>
	)
}

export default New
