
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function PassaroPage() {
	return (
		<>
			<Header />
			<main style={{ padding: 24 }}>
				<h1>Pássaros</h1>
				<p>Lista de pássaros disponíveis para adoção.</p>
				<p>
					<Link href="/nossos-animais/passaro">Ver todos os pássaros</Link>
				</p>
			</main>
			<Footer />
		</>
	);
}

