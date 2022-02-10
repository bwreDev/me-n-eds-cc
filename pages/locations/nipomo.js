import NipomoHero from '../../components/NipomoHero';
import Head from 'next/head';
// import { createClient } from '../../prismicConfiguration';
// import { SliceZone } from '@prismicio/react';
// import FoodMenu from '../../slices/FoodMenu';

// export async function getStaticProps() {
//   const client = createClient();

//   const nipomo = await client.getByUID('nipomo-menu', 'nipomo-menu');

//   return {
//     props: {
//       nipomo,
//     },
//   };
// }

export default function Nipomo({ nipomo }) {
  return (
    <>
      <Head>
        <title>Me-n-Ed&apos;s pizzeria & Crafthouse | Nipomo</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Colton Bonner' />
        <meta
          name='description'
          content="Me-n-Ed's pizzeria and Crafthouse of Nipomo is perfectly located in the heart of Nipomo. 110 Mary Ave #1, Nipomo CA 94555. (805) 929-2915. Open Sunday-Thursday 11am-9pm, Friday-Saturday 11am-10pm."
        />
        <meta
          property='og:title'
          content="Me-n-Ed's pizzeria & Crafthouse | Nipomo"
        />
        <meta
          property='og:description'
          content="Me-n-Ed's pizzeria and Crafthouse of Nipomo is perfectly located in the heart of Nipomo. 110 Mary Ave #1, Nipomo CA 94555. (805) 929-2915. Open Sunday-Thursday 11am-9pm, Friday-Saturday 11am-10pm."
        />
        <meta property='og:image' content='/images/me-n-eds-crafthouse.png' />
        <meta property='og:url' content='' />
      </Head>
      <NipomoHero />
      {/* {<SliceZone
        slices={nipomo.data.slices}
        components={{
          food_menu: FoodMenu,
        }}
      />} */}
    </>
  );
}
