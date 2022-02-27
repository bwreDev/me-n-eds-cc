import React from 'react';
import { RichText } from 'prismic-reactjs';

const FoodMenu = ({ slice }) => (
  <section className='max-w-7xl px-12 bg-grey-900 py-4 mx-auto'>
    <h2 className='text-xl text-red-500'>
      <RichText render={slice.primary.SectionTitle} />
    </h2>
    <p className='text-sm text-grey-200 border-b-2 border-red-500 py-4 mb-4'>
      <RichText render={slice.primary.SectionDescription} />
    </p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
      {slice?.items?.map((item, i) => (
        <article
          className='flex flex-col max-w-sm bg-grey-800 pl-2 rounded-xl'
          key={item.ItemName}
        >
          <h3 className='text-lg pt-4 text-red-500'>
            <RichText render={item.ItemName} />
          </h3>
          <p className='px-10 pt-2 text-grey-200'>
            <RichText render={item.ItemDescription} />
          </p>
          <span className='text-xs text-grey-300 self-end pr-4 pb-2'>
            $ {item.Price}
          </span>
        </article>
      ))}
    </div>
  </section>
);

export default FoodMenu;
