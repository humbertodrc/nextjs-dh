import { Card } from "@/components/Card";
import { Layout } from '@/components/Layout';
import { Character } from '@/interface';
import homeContentEN from "@/lang/en/home";
import homeContentES from "@/lang/es/home";
import homeContentPT from "@/lang/pt/home";
import styles from "@/styles/Home.module.css";
import { NextPage } from 'next';
import { Inter } from "next/font/google";
import { useRouter } from 'next/router';

const inter = Inter({subsets: ["latin"]});
interface Props {
	data: Character[]
}

const Home: NextPage<Props> = ({data}) => {

	// Traducciones
	const router = useRouter();
	const {locale} = router;
	const content =
		locale === "en"
			? homeContentEN
			: locale === "es"
			? homeContentES
			: homeContentPT;


	return (
		<Layout title="Ecommerce DH">
			<div>
				<h1>{content.title}</h1>
				<div className={styles.grid}>
					{data.map((item) => (
						<Card key={item.tail} item={item} />
					))}
				</div>
			</div>
		</Layout>
	);
}

export const getStaticProps = async() => {
	const characters = await fetch("https://amiiboapi.com/api/amiibo/")
	const resp = await characters.json()
	const data = resp.amiibo.slice(0, 50)

	return {
		props: {
			data
		}
	}
}

export default Home;
