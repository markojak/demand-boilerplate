import React, { Fragment } from 'react';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'rc-tabs/assets/index.css';
import '../common/src/assets/css/flaticon.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Modal />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
