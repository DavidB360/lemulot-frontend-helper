import styles from "../styles/Tutorials.module.css"

function Tutorials({ show }) {
	if (show) {
		return (
			<div className={styles.main}>
				<div className={styles.container}>
					<text>Tutoriels</text>
				</div>
			</div>
		)
	}
}

export default Tutorials
