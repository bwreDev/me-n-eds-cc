import PismoHero from '../../components/PismoHero';
import Head from 'next/head';

export default function Pismo() {
	return (
		<>
			<Head>
				<title>Me-n-Ed&apos;s pizzeria & Crafthouse | Pismo</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<meta name='author' content='Colton Bonner' />
				<meta
					name='description'
					content="Me-n-Ed's pizzeria and Crafthouse in Pismo is the newest addition to the Central Coast Restaurant Group's family. Now open! 750 Price St Pismo Beach, CA 93449. (805) 556-3636. Open Sunday-Wednesday 11am-10pm, Thursday-Saturday 11am-11pm."
				/>
				<meta
					property='og:title'
					content="Me-n-Ed's pizzeria & Crafthouse | Pismo"
				/>
				<meta
					property='og:description'
					content="Me-n-Ed's pizzeria and Crafthouse in Pismo is the newest addition to the Central Coast Restaurant Group's family. Now open! 750 Price St Pismo Beach, CA 93449. (805) 556-3636. Open Sunday-Wednesday 11am-10pm, Thursday-Saturday 11am-11pm."
				/>
				<meta
					property='og:image'
					content='/images/me-n-eds-crafthouse.png'
				/>
				<meta property='og:url' content='' />
			</Head>
			<PismoHero />
		</>
	);
}
