import React from 'react';
import { RichText } from 'prismic-reactjs';

const Crust = ({ slice }) => (
  <section className='max-w-7xl px-12 bg-grey-900 py-4 mx-auto text-grey-200'>
    <h2 className='text-xl text-red-500 border-b-2 border-red-500 mb-4 pb-2'>
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </h2>
    <div className='grid grid-cols-2 gap-4 text-center'>
      {slice?.items?.map((item, i) => (
        <div key={item.crustName}>
          <h3 className='text-lg text-red-500 mb-2'>
            <RichText render={item.crustName} />
          </h3>
          <p className='px-8'>
            <RichText render={item.crustDescription} />
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Crust;
