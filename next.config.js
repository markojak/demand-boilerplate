const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90
        },
        webp: {
          preset: 'default',
          quality: 90
        }
      }
    ],
    withFonts
  ],
  {
    env: {
      apiBaseUrl: 'https://secta.prismic.io', // Replace this with the functioning Prismic ID
      siteName: 'Private',
      copyrightText: 'Copyrights 2020 Private, Inc',
      revalidate: 600, // in seconds.
      gtmCode: '', // Google Tag Manager Code.
      gaCode: '', // Google Analytics Code. (View ln53 in _document.js for commented out Gtag installation)
      gSiteVer: '', // Content for Google Site Verification meta tag.
      airtableApiKey: '',
      airtableBaseId: ''
    }
  }
);
