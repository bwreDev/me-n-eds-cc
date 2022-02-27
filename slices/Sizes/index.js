import React from 'react';
import { RichText } from 'prismic-reactjs';

const Sizes = ({ slice }) => (
  <section className='text-grey-200 bg-grey-900 max-w-2xl mx-auto mb-4 px-1 lg:px-12 lg:max-w-7xl'>
    <h2 className='text-2xl font-extrabold text-red-500 border-b-2 border-red-500 mb-4 pb-2'>
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </h2>
    {slice?.items?.map((item, i) => (
      <div
        key={item.priceCategory}
        className='grid grid-cols-6 border-b py-2 sm:p-2 text-center'
      >
        <ul>
          <li className='text-xs md:text-sm lg:text-lg text-red-500 text-left'>
            <RichText render={item.priceCategory} />
          </li>
        </ul>
        <ul>
          <li className='text-xs md:text-sm lg:text-base'>
            <RichText render={item.sizePer} />
          </li>
        </ul>
        <ul>
          <li className='text-xs md:text-sm lg:text-base'>
            <RichText render={item.sizeSmall} />
          </li>
        </ul>
        <ul>
          <li className='text-xs md:text-sm lg:text-base'>
            <RichText render={item.sizeMed} />
          </li>
        </ul>
        <ul>
          <li className='text-xs md:text-sm lg:text-base'>
            <RichText render={item.sizeLarge} />
          </li>
        </ul>
        <ul>
          <li className='text-xs md:text-sm lg:text-base'>
            <RichText render={item.sizeFam} />
          </li>
        </ul>
      </div>
    ))}
  </section>
);

export default Sizes;
