import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from 'store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*error display*/}
          <Route path='*' element={<Error404/>} />

          {/*home display*/}
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
