import {Layout} from "@/components/Layout";
import { Serie } from "@/interface";
import { GetServerSideProps, NextPage } from 'next';

interface Props {
	data: Serie[];
}

const Series : NextPage<Props> = ({data}) => {

	return (
		<Layout title="series">
			<h1>Series</h1>
			<div>
				{data.map((serie: Serie) => (
					<div key={serie.key}>
						<h2>{serie.name}</h2>
						<p>codigo: {serie.key}</p>
					</div>
				))}
			</div>
		</Layout>
	);
};

export const getServerSideProps : GetServerSideProps = async ({req, res}) => {

	const respuesta = await fetch("https://amiiboapi.com/api/amiiboseries/");
	const data: { amiibo: Serie[] } = await respuesta.json();
	
	res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );

	return {
		props: {
			data: data.amiibo,
		},
	};
};

export default Series;
