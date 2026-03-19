
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function CoelhoPage() {
	return (
		<>
			<Header />
			<main style={{ padding: 24 }}>
				<h1>Coelhos</h1>
				<p>Lista de coelhos disponíveis para adoção.</p>
				<p>
					<Link href="/nossos-animais/coelho">Ver todos os coelhos</Link>
				</p>
			</main>
			<Footer />
		</>
	);
}

