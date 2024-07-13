// GoogleAnalytics.js
import React from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-ZM8F0WPQ8D"; // Reemplaza con tu propio ID de seguimiento
ReactGA.initialize(TRACKING_ID);

const GoogleAnalytics = () => (
  <Helmet>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${TRACKING_ID}');
      `}
    </script>
  </Helmet>
);

export default GoogleAnalytics;