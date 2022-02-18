import React from 'react';
import { RichText } from 'prismic-reactjs';

const FoodMenu = ({ slice }) => (
  <section className='text-grey-200 bg-grey-900 max-w-2xl mx-auto px-2 lg:px-12 mb-4 lg:max-w-7xl'>
    <h2 className='text-2xl font-extrabold text-red-500'>
      <RichText render={slice.primary.SectionTitle} />
    </h2>
    <p className='text-sm text-grey-200 border-b-2 border-red-500 py-4 mb-4'>
      <RichText render={slice.primary.SectionDescription} />
    </p>
    <div className='grid grid-cols-1 gap-4 text-center sm:grid-cols-2'>
      {slice?.items?.map((item, i) => (
        <article className='max-w-sm mx-auto' key={item.ItemName}>
          <h3 className='text-lg pt-4 font-bold text-red-500'>
            <RichText render={item.ItemName} />
          </h3>
          <p className='px-2 lg:px-10 pt-2'>
            <RichText render={item.ItemDescription} />
          </p>
          <span className='text-xs text-grey-300'>{item.Price}</span>
        </article>
      ))}
    </div>
  </section>
);

export default FoodMenu;
