import logo from './logo.svg';
import WelcomePage from './components/Welcome-page';
import HomePage from './components/Home-page';
import NotFoundPage from './components/NotFoundPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path: "/",element: <WelcomePage /> },
  {path: "/home",element: <HomePage /> },
  {path: "/*",element: <NotFoundPage /> },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;