import PismoHero from '../../components/PismoHero';
import Head from 'next/head';
import { createClient } from '../../prismicConfiguration';
import { SliceZone } from '@prismicio/react';
import FoodMenu from '../../slices/FoodMenu';
import Crust from '../../slices/Crust';
import Sauce from '../../slices/Sauce';
import Sizes from '../../slices/Sizes';
import Toppings from '../../slices/Toppings';
import SignaturePrices from '../../slices/SignaturePrices';
import { Tab } from '@headlessui/react';

export async function getStaticProps() {
  const client = createClient();

  const santaMariaCyop = await client.getByUID('mne-cyop-menu', 'sm-cyop-menu');
  const santaMariaSig = await client.getByUID(
    'mne-signature-pizzas',
    'sm-signature-menu'
  );
  const santaMariaSalads = await client.getByUID('mne-salads', 'sm-mne-salads');
  const santaMariaCalzones = await client.getByUID(
    'mne-calzones',
    'sm-mne-calzones'
  );
  const santaMariaSandwiches = await client.getByUID(
    'mne-sandwiches',
    'sm-mne-sandwiches'
  );
  const santaMariaSides = await client.getByUID('mne-sides', 'sm-mne-sides');

  return {
    props: {
      santaMariaCyop,
      santaMariaSig,
      santaMariaSalads,
      santaMariaCalzones,
      santaMariaSandwiches,
      santaMariaSides,
    },
  };
}

export default function Pismo({
  santaMariaCyop,
  santaMariaSig,
  santaMariaSalads,
  santaMariaCalzones,
  santaMariaSandwiches,
  santaMariaSides,
}) {
  return (
    <>
      <Head>
        <title>Me-n-Ed&apos;s pizzeria & Crafthouse | Pismo</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
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
        <meta property='og:image' content='/images/me-n-eds-crafthouse.png' />
        <meta property='og:url' content='' />
      </Head>
      <PismoHero />
      <Tab.Group>
        <Tab.List className='grid grid-cols-2 lg:grid-cols-5 gap-1 text-lg text-grey-100 px-2 mb-4 lg:px-12'>
          <Tab className='font-bold bg-grey-800 py-2 px-4 rounded-xl'>
            Create Your Own Pizza
          </Tab>
          <Tab className='font-bold bg-grey-800 py-2 px-4 rounded-xl focus:text-red-500'>
            Signature Pizzas
          </Tab>
          <Tab className='font-bold bg-grey-800 py-2 px-4 rounded-xl focus:text-red-500'>
            Salads
          </Tab>
          <Tab className='font-bold bg-grey-800 py-2 px-4 rounded-xl focus:text-red-500'>
            Sweets & Sides
          </Tab>
          <Tab className='font-bold bg-grey-800 py-2 px-4 rounded-xl focus:text-red-500'>
            Sandwiches
          </Tab>
          <Tab className='font-bold bg-grey-800 py-2 px-4 rounded-xl focus:text-red-500'>
            Calzones
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {
              <SliceZone
                slices={santaMariaCyop.data.body}
                components={{
                  crust: Crust,
                  sauce: Sauce,
                  sizes: Sizes,
                  toppings: Toppings,
                }}
              />
            }
          </Tab.Panel>
          <Tab.Panel>
            {
              <SliceZone
                slices={santaMariaSig.data.body}
                components={{
                  food_menu: FoodMenu,
                  signature_prices: SignaturePrices,
                }}
              />
            }
          </Tab.Panel>
          <Tab.Panel>
            {
              <SliceZone
                slices={santaMariaSalads.data.body}
                components={{
                  food_menu: FoodMenu,
                }}
              />
            }
          </Tab.Panel>
          <Tab.Panel>
            {
              <SliceZone
                slices={santaMariaSides.data.body}
                components={{
                  food_menu: FoodMenu,
                }}
              />
            }
          </Tab.Panel>
          <Tab.Panel>
            {
              <SliceZone
                slices={santaMariaSandwiches.data.body}
                components={{
                  food_menu: FoodMenu,
                }}
              />
            }
          </Tab.Panel>
          <Tab.Panel>
            {
              <SliceZone
                slices={santaMariaCalzones.data.body}
                components={{
                  food_menu: FoodMenu,
                }}
              />
            }
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
