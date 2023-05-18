import { Card } from "@/components/Card";
import { Layout } from "@/components/Layout";
import { Character } from "@/interface";
import { NextPage } from "next";

interface Props {
	item: Character;
}

const Product: NextPage<Props> = ({item}) => {
	return (
		<Layout title={item.name}>
			<div>
				<h1>Product</h1>
				<Card key={item.tail} item={item} />
			</div>
		</Layout>
	);
};

export const getStaticPaths = async () => {
	const characters = await fetch("https://amiiboapi.com/api/amiibo/");
	const resp = await characters.json();
	const data = resp.amiibo.slice(0, 50);

	const paths = data.map((item: Character) => ({params: {id: item.tail}}));

	return {
		paths: paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({params}: any) => {
	const {id} = params;

	const character = await fetch(`https://amiiboapi.com/api/amiibo/?tail=${id}`);
	const resp = await character.json();

	return {
		props: {
			item: resp.amiibo[0],
		},
		revalidate: 86400, // 24 horas
	};
};

export default Product;
