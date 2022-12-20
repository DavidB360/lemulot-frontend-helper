import styles from "../styles/Follow.module.css"

function Follow({ show }) {
	const demandes = [
		{
			Utilisateur: "Mr Doe",
			Probleme: "Créer une adresse email",
			Categorie: "connexion",
			DateDouverture: "12-12-2022",
		},
		{
			Utilisateur: "Mr Doe",
			Probleme: "ecran",
			Categorie: "reseau",
			DateDouverture: "29-02-2029",
		},
	]

	if (show) {
		return (
			<div className={styles.main}>
				<div className={styles.container}>
					<text>Demandes suivies</text>
					<input
						className={styles.input}
						type="text"
						placeholder="Recherche"
					/>
					<select
						name="category"
						id="trierPar"
					>
						<option value="">Trier par...</option>
						<option value="statut">statut</option>
						<option value="date">date</option>
						<option value="nom d'utilisateur">nom d'utilisateur</option>
					</select>
					<div className={styles.msg}>
						<div
							className={`${styles.bubble} ${styles.bubbleBottomLeft}`}
							contenteditable
						>
							Bonjour le mulot
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Follow
