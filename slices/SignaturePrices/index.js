import React from 'react';
import { RichText } from 'prismic-reactjs';

const SignaturePrices = ({ slice }) => (
  <section className='text-red-500 font-bold text-lg bg-grey-900 max-w-2xl mx-auto px-2 py-2 text-center lg:px-12 mb-4 lg:max-w-7xl'>
    <div className='flex justify-evenly border-t-2 border-b-2 border-red-500'>
      {slice?.items?.map((item, i) => (
        <div key={item.sigSize}>
          <p>
            <RichText render={item.sigSize} />
          </p>
          <p>
            <RichText render={item.sigPrice} />
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default SignaturePrices;
