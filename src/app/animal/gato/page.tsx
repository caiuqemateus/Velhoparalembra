
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function GatoPage() {
	return (
		<>
			<Header />
			<main style={{ padding: 24 }}>
				<h1>Gatos</h1>
				<p>Lista de gatos disponíveis para adoção.</p>
				<p>
					<Link href="/nossos-animais/gato">Ver todos os gatos</Link>
				</p>
			</main>
			<Footer />
		</>
	);
}

