import styles from "../styles/Demands.module.css"

function Demands({ show }) {
	if (show) {
		return (
			<div className={styles.main}>
				<div className={styles.container}>
					<text>Nouvelles demandes</text>
				</div>
			</div>
		)
	}
}

export default Demands
