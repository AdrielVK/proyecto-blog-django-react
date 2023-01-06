
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import store from 'store';
import { Provider } from 'react-redux';
import AnimatedRoutes from 'Routes';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Adriel Vallejos Kehmeier - Proyecto 1</title>
        <meta name='description' content='Project App Full-Stack developed by Adriel Vallejos Kehmeier'></meta>
        <link rel='canonical' href='www.//AdrielValejosApp.com'/>
        <meta name='robots' content='all'></meta>
        <meta name='keywords' content='portfolio, Adriel Vallejos Kehmeier, Fullstack-app, fullstack developer'></meta>
        <meta name='published' content='Adriel Vallejos Kehmeier'></meta>
      </Helmet>
      <Provider store={store}>
        <Router>
          <AnimatedRoutes/>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
