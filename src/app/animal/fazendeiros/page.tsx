
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function FazendeirosPage() {
	return (
		<>
			<Header />
			<main style={{ padding: 24 }}>
				<h1>Fazendeiros</h1>
				<p>Informações sobre fazendeiros e animais de fazenda.</p>
				<p>
					<Link href="/nossos-animais/fazendeiros">Ver animais de fazenda</Link>
				</p>
			</main>
			<Footer />
		</>
	);
}

