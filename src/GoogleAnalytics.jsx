// GoogleAnalytics.js
import React from 'react';
import { Helmet } from 'react-helmet';

const GoogleAnalytics = () => (
  <Helmet>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZM8F0WPQ8D"></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-ZM8F0WPQ8D');
      `}
    </script>
  </Helmet>
);

export default GoogleAnalytics;
