import Head from "next/head";
import Image from "next/image";
import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import {useEffect, useState} from "react";

const inter = Inter({subsets: ["latin"]});

interface Amiibo {
	amiiboSeries: string;
	character: string;
	gameSeries: string;
	image: string;
	name: string;
	tail: string;
}

export default function Home() {
	const [data, setData] = useState<Amiibo[]>([]);

	useEffect(() => {
		fetch("https://amiiboapi.com/api/amiibo/")
			.then((res) => res.json())
			.then((data) => setData(data.amiibo.slice(0, 20)));
	}, []);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${styles.main} ${inter.className}`}>
				<h1>Next</h1>
				<div className={styles.grid}>
					{data.map((item) => (
						<div key={item.tail} className={styles.card}>
							<Image
								src={item.image}
								alt={item.name}
								width={200}
								height={200}
								priority={true}
							/>
							<h3>{item.character}</h3>
							<p>{item.amiiboSeries}</p>
						</div>
					))}
				</div>
			</main>
		</>
	);
}
