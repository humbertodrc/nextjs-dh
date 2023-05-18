import { Layout } from '@/components/Layout';
import { Series } from '@/interface';
import { GetServerSideProps, NextPage } from 'next';

interface Props {
	data: Series[]
}

const Series: NextPage<Props> = ({data}) => {

	console.log(data);

	return (
		<Layout title='series'>
			<h1>Series</h1>
			<div>
				{data.map((serie: Series) => (
					<div key={serie.key}>
						<h2>{serie.name}</h2>
						<p>codigo: {serie.key }</p>
					</div>
					))}
			</div>
		</Layout>
	);
}

// Se ejecuta en cada Request
// Se puede utilizar cuando tienes muchos datos dinamicos
// export const getServerSideProps: GetServerSideProps = async (context) => {

// 	console.log(context);

// 	const res = await fetch("https://amiiboapi.com/api/amiiboseries/");
// 	const data: { amiibo: Series[] } = await res.json();
	

// 	return {
// 		props: {
// 			data: data.amiibo,
// 		},
// 	};
// };


// Podemos cachear las respuestas del lado del servidor
export const getServerSideProps: GetServerSideProps = async ({req, res}) => {

	const resp = await fetch("https://amiiboapi.com/api/amiiboseries/");
	const data: { amiibo: Series[] } = await resp.json();
	
	// Establecer encabezado de almacenamiento en caché con la directiva stale-while-revalidate
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');


	return {
		props: {
			data: data.amiibo,
		},
	};
};

export default Series;