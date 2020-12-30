import React, { Fragment, useEffect } from 'react';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'rc-tabs/assets/index.css';
import 'src/common/src/assets/css/flaticon.css';
import 'src/common/src/assets/css/icon-example-page.css';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.gtmCode });
  }, []);

  return (
    <Fragment>
      <Modal />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
