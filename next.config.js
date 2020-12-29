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
      apiBaseUrl: 'https://zerofriction.prismic.io',
      siteName: 'ZeroFriction',
      copyrightText: 'Copyrights 2020 ZeroFriction Inc',
      revalidate: 600, // in seconds.
      gtmCode: 'GTM-NP7RQ5N', // Google Tag Manager Code.
      gaCode: 'G-KEV1GF964G', // Google Analytics Code.
      gSiteVer: 'sgok4LsDHBrwvBbgPOjcMmgneKf6dzI2Xgt1Dz_0iC4', // Content for Google Site Verification meta tag.
      airtableApiKey: 'keywZ51MOT5QEvd9Y',
      airtableBaseId: 'appovYEGzL5cu8mbl'
    }
  }
);
