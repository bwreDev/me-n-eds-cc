import React from 'react';
import { RichText } from 'prismic-reactjs';

const Crust = ({ slice }) => (
  <section className='text-grey-200 bg-grey-900 max-w-2xl mx-auto px-12 mb-4 lg:max-w-7xl'>
    <h2 className='text-2xl font-extrabold text-red-500 border-b-2 border-red-500 mb-4 pb-2'>
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </h2>
    <div className='grid grid-cols-1 gap-4 text-center sm:grid-cols-2'>
      {slice?.items?.map((item, i) => (
        <article
          className='max-w-sm mx-auto bg-grey-800 rounded-xl'
          key={item.crustName}
        >
          <h3 className='text-lg pt-4 text-red-500'>
            <RichText render={item.crustName} />
          </h3>
          <p className='px-2 lg:px-10 pt-2'>
            <RichText render={item.crustDescription} />
          </p>
        </article>
      ))}
    </div>
  </section>
);

export default Crust;
