import './App.scss';
import {
  BrowserRouter, Route, Routes, Link,
} from 'react-router-dom';
import routes from '@/router/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Link to="/about">去看看About组件</Link>
          <br />
          <Link to="/">去看看canvas涂抹/擦除组件</Link>
          <Routes>
            {routes.map((route) => (
              <Route
                key={(route.path as string)}
                path={
                  Array.isArray(route.path) ? route.path.join('/') : route.path
                }
                element={route.component ? <route.component /> : null}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
