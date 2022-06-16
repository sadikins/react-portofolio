// Koneksi ke sanity.io : sanity manage
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-06-15',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
    // Api
    // add CORS origin
    // http://localhost:3000
    // add API Token
    // Name: Apilication Token
    // Editor -> save -> copy -> paste


});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
