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
      apiBaseUrl: false ? 'http://localhost:1337' : 'https://zf.mime.ai',
      s3Prefix: 'https://xy.s3.eu-central-1.amazonaws.com/',
      revalidate: 600,
      gtmCode: 'GTM-xy', // Google Tag Manager Code.
      gaCode: 'G-xy', // Google Analytics Code.
      gSiteVer: 'xy' // Content for Google Site Verification meta tag.
    }
  }
);
