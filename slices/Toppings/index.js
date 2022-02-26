import React from 'react';
import { RichText } from 'prismic-reactjs';

const Toppings = ({ slice }) => (
  <section className='text-grey-200 bg-grey-900 max-w-2xl mx-auto px-2 lg:px-12 mb-4 lg:max-w-7xl'>
    <h2 className='text-2xl font-extrabold text-red-500 border-b-2 border-red-500 mb-4 pb-2'>
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </h2>
    <div className='grid grid-cols-2 gap-2 text-sm sm:grid-cols-4 lg:text-base'>
      {slice?.items?.map((item, i) => (
        <p key={item.topping}>
          <RichText render={item.topping} />
        </p>
      ))}
    </div>
  </section>
);

export default Toppings;
