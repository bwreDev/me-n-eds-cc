import SMHero from '../../components/SMHero';
import Head from 'next/head';

export default function SantaMaria() {
	return (
		<>
			<Head>
				<title>
					Me-n-Ed&apos;s pizzeria & Crafthouse | Santa Maria
				</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<meta name='author' content='Colton Bonner' />
				<meta
					name='description'
					content="Me-n-Ed's pizzeria and Crafthouse in Santa Maria is back! Come visit the old school meets new school pizzeria. Now open! 560 Betteravia Rd Ste B Santa Maria, CA 93454. (805) 925-7992. Open Sunday-Wednesday 11am-10pm, Thursday-Saturday 11am-11pm."
				/>
				<meta
					property='og:title'
					content="Me-n-Ed's pizzeria & Crafthouse | Pismo"
				/>
				<meta
					property='og:description'
					content="Me-n-Ed's pizzeria and Crafthouse in Santa Maria is back! Come visit the old school meets new school pizzeria. Now open! 560 Betteravia Rd Ste B Santa Maria, CA 93454. (805) 925-7992. Open Sunday-Wednesday 11am-10pm, Thursday-Saturday 11am-11pm."
				/>
				<meta
					property='og:image'
					content='/images/me-n-eds-crafthouse.png'
				/>
				<meta property='og:url' content='' />
			</Head>
			<SMHero />
		</>
	);
}
