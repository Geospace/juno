import React from 'react';
import App from 'next/app';

import 'normalize.css';
import Theme from '../components/Theme';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <Theme>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Theme>
    );
  }
}

export default MyApp;
