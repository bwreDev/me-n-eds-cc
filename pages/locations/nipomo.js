import NipomoHero from '../../components/NipomoHero';
import Head from 'next/head';
import { createClient } from '../../prismicConfiguration';
import { SliceZone } from '@prismicio/react';
import FoodMenu from '../../slices/FoodMenu';
import Crust from '../../slices/Crust';
import Sauce from '../../slices/Sauce';
import Sizes from '../../slices/Sizes';
import Toppings from '../../slices/Toppings';
import SignaturePrices from '../../slices/SignaturePrices';
import LunchSpecials from '../../slices/LunchSpecials';
import { Tab } from '@headlessui/react';

export async function getStaticProps() {
  const client = createClient();

  const nipomoCyop = await client.getByUID('mne-cyop-menu', 'nipomo-cyop-menu');
  const nipomoSig = await client.getByUID(
    'mne-signature-pizzas',
    'nipomo-signature-menu'
  );
  const nipomoSalads = await client.getByUID('mne-salads', 'nipomo-mne-salads');
  const nipomoCalzones = await client.getByUID(
    'mne-calzones',
    'nipomo-mne-calzones'
  );
  const nipomoLunchSpecials = await client.getByUID(
    'mne-lunch-specials',
    'nipomo-lunch-specials'
  );
  const nipomoSandwiches = await client.getByUID(
    'mne-sandwiches',
    'nipomo-mne-sandwiches'
  );
  const nipomoKids = await client.getByUID('mne-kids', 'nipomo-mne-kids');
  const nipomoPasta = await client.getByUID('mne-pasta', 'nipomo-mne-pasta');
  const nipomoSides = await client.getByUID('mne-sides', 'nipomo-mne-sides');
  const nipomoDrinks = await client.getByUID('mne-drinks', 'nipomo-mne-drinks');

  return {
    props: {
      nipomoCyop,
      nipomoSig,
      nipomoSalads,
      nipomoCalzones,
      nipomoLunchSpecials,
      nipomoSandwiches,
      nipomoKids,
      nipomoPasta,
      nipomoSides,
      nipomoDrinks,
    },
  };
}

export default function Nipomo({
  nipomoCyop,
  nipomoSig,
  nipomoSalads,
  nipomoCalzones,
  nipomoLunchSpecials,
  nipomoSandwiches,
  nipomoKids,
  nipomoPasta,
  nipomoSides,
  nipomoDrinks,
}) {
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
          <Tab className='font-bold bg-grey-800 py-2 px-4 rounded-xl focus:text-red-500'>
            Kids Menu
          </Tab>
          <Tab className='font-bold bg-grey-800 py-2 px-4 rounded-xl focus:text-red-500'>
            Lunch Specials
          </Tab>
          <Tab className='font-bold bg-grey-800 py-2 px-4 rounded-xl focus:text-red-500'>
            Signature Pastas
          </Tab>
          <Tab className='font-bold bg-grey-800 py-2 px-4 rounded-xl focus:text-red-500'>
            Drinks
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {
              <SliceZone
                slices={nipomoCyop.data.body}
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
                slices={nipomoSig.data.body}
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
                slices={nipomoSalads.data.body}
                components={{
                  food_menu: FoodMenu,
                }}
              />
            }
          </Tab.Panel>
          <Tab.Panel>
            {
              <SliceZone
                slices={nipomoSides.data.body}
                components={{
                  food_menu: FoodMenu,
                }}
              />
            }
          </Tab.Panel>
          <Tab.Panel>
            {
              <SliceZone
                slices={nipomoSandwiches.data.body}
                components={{
                  food_menu: FoodMenu,
                }}
              />
            }
          </Tab.Panel>
          <Tab.Panel>
            {
              <SliceZone
                slices={nipomoCalzones.data.body}
                components={{
                  food_menu: FoodMenu,
                }}
              />
            }
          </Tab.Panel>
          <Tab.Panel>
            {
              <SliceZone
                slices={nipomoKids.data.body}
                components={{
                  food_menu: FoodMenu,
                }}
              />
            }
          </Tab.Panel>
          <Tab.Panel>
            {
              <SliceZone
                slices={nipomoLunchSpecials.data.body}
                components={{
                  lunch_specials: LunchSpecials,
                }}
              />
            }
          </Tab.Panel>
          <Tab.Panel>
            {
              <SliceZone
                slices={nipomoPasta.data.body}
                components={{
                  food_menu: FoodMenu,
                }}
              />
            }
          </Tab.Panel>
          <Tab.Panel>
            {
              <SliceZone
                slices={nipomoDrinks.data.body}
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
