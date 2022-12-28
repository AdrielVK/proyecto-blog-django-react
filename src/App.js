import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from 'store';
import { Provider } from 'react-redux';
import Servicios from 'containers/pages/Servicios';
import Casos from 'containers/pages/Casos';
import Nosotros from 'containers/pages/Nosotros';
import Contacto from 'containers/pages/Contacto';
import Contratanos from 'containers/pages/Contratanos';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*error display*/}
          <Route path='*' element={<Error404/>} />

          {/*home display*/}
          <Route path='/' element={<Home/>} />

          <Route path='/Casos' element={<Casos/>} />
          <Route path='/Servicios' element={<Servicios/>} />
          <Route path='/Nosotros' element={<Nosotros/>} />
          <Route path='/Contacto' element={<Contacto/>} />
          <Route path='/Contratanos' element={<Contratanos/>} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
