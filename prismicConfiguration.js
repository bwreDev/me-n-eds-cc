import * as Prismic from '@prismicio/client';

export const apiEndpoint = Prismic.getEndpoint('cc-rg');

// export const linkResolver = (doc) => {
//   if (doc.type === 'product') {
//     return `/products/${doc.uid}`;
//   }
//   return '/';
// };

export const createClient = (config) => {
  const client = Prismic.createClient(apiEndpoint);

  return client;
};
