import React from 'react';
import { RichText } from 'prismic-reactjs';

const LunchSpecials = ({ slice }) => (
  <section className='text-grey-200 bg-grey-900 max-w-2xl mx-auto px-2 py-4 border-b-2 border-red-500 lg:px-12 mb-4 lg:max-w-7xl'>
    <h2 className='text-2xl font-extrabold text-red-500'>
      <RichText render={slice.primary.title} />
    </h2>
    <p className='text-sm text-grey-200 border-b-2 border-red-500 py-4 mb-4'>
      <RichText render={slice.primary.description} />
    </p>
    <div className='grid grid-cols-1 gap-4'>
      {slice?.items?.map((item, i) => (
        <article
          key={item.itemNumber}
          className='grid grid-cols-4 items-center'
        >
          <p className='w-10 h-10 inline-flex items-center justify-center border-2 rounded-full'>
            <RichText render={item.itemNumber} />
          </p>
          <p className='font-semibold text-red-500 col-span-2'>
            <RichText render={item.itemDescription} />
          </p>

          <p className='ml-4'>
            <RichText render={item.itemPrice} />
          </p>
        </article>
      ))}
    </div>
  </section>
);

export default LunchSpecials;
