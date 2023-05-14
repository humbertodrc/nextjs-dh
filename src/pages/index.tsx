import {Card} from "@/components/Card";
import homeContentEN from "@/lang/en/home";
import homeContent from "@/lang/en/home";
import homeContentES from "@/lang/es/home";
import homeContentPT from "@/lang/pt/home";
import styles from "@/styles/Home.module.css";
import {Inter} from "next/font/google";
import Head from "next/head";
import { useRouter } from 'next/router';
import {useEffect, useState} from "react";

const inter = Inter({subsets: ["latin"]});

interface Character {
	amiiboSeries: string;
	character: string;
	gameSeries: string;
	image: string;
	name: string;
	tail: string;
}

export default function Home() {
	const [data, setData] = useState<Character[]>([]);

	// Traducciones
	const router = useRouter();
	const {locale} = router;
	const content =
		locale === "en"
			? homeContentEN
			: locale === "es"
			? homeContentES
			: homeContentPT;

	useEffect(() => {
		fetch("https://amiiboapi.com/api/amiibo/")
			.then((res) => res.json())
			.then((data) => setData(data.amiibo.slice(0, 50)));
	}, []);

	return (
		<>
			<Head>
				<title>Ecommerce DH</title>
				<meta name="description" content="Ecommerce De Practica" />
				<meta
					name="keywords"
					content="venta de figuras de Marios, videjuegos, zelda"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<h1>{content.title}</h1>
				<div className={styles.grid}>
					{data.map((item) => (
						<Card key={item.tail} item={item} />
					))}
				</div>
			</div>
		</>
	);
}
