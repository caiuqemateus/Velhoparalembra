
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function HamsterPage() {
	return (
		<>
			<Header />
			<main style={{ padding: 24 }}>
				<h1>Hamsters</h1>
				<p>Lista de hamsters disponíveis para adoção.</p>
				<p>
					<Link href="/nossos-animais/hamster">Ver todos os hamsters</Link>
				</p>
			</main>
			<Footer />
		</>
	);
}

