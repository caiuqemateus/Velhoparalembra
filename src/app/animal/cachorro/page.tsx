import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function CachorroPage() {
	return (
		<>
			<Header />
			<main style={{ padding: 24 }}>
				<h1>Cachorros</h1>
				<p>Lista de cachorros disponíveis para adoção.</p>
				<p>
					<Link href="/nossos-animais/cachorro">Ver todos os cachorros</Link>
				</p>
			</main>
			<Footer />
		</>
	);
}

