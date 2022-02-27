import React from 'react';
import { RichText } from 'prismic-reactjs';

const Sauce = ({ slice }) => (
  <section className='text-grey-200 bg-grey-900 max-w-2xl mx-auto px-2 lg:px-12 mb-4 pb-4 lg:max-w-7xl'>
    <h2 className='text-2xl font-extrabold text-red-500 border-b-2 border-red-500 mb-4 pb-2'>
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </h2>
    <div className='grid grid-cols-1 gap-2 text-center sm:grid-cols-3'>
      {slice?.items?.map((item, i) => (
        <article className='max-w-sm mx-auto' key={item.sauceName}>
          <h3 className='text-xl p-4'>
            <RichText render={item.sauceName} />
          </h3>
        </article>
      ))}
    </div>
  </section>
);

export default Sauce;
