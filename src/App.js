import logo from './logo.svg';
import NavbarMain from './components/NavbarMain';
import WelcomePage from './components/Welcome-page';
import HomePage from './components/Home-page';
import NotFoundPage from './components/NotFoundPage';
import Legal from './components/services/Legal';
import BusinessLaw from './components/services/Legal/1.BusinessLaw';
import AccountingPayroll from './components/services/Accounting-Payroll';
import Audit from './components/services/Audit';
import WebIT from './components/services/WebIT';
import InternalAudit from './components/services/InternalAudit';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';
import Career from './components/Career';
import ContactWidget from './components/ContactWidget';

const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/services/legal", element: <Legal /> },
  { path: "/services/legal/1", element: <BusinessLaw /> },
  { path: "/services/accounting-payroll", element: <AccountingPayroll /> },
  { path: "/services/audit", element: <Audit /> },
  { path: "/services/internal-audit", element: <InternalAudit /> },
  { path: "/services/web-it", element: <WebIT /> },
  { path: "/career", element: <Career /> },
  { path: "/*", element: <NotFoundPage /> },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarMain />
        <RouterProvider router={router} />
      </header>
      <Footer />
      <ContactWidget />
    </div>
  );
}

export default App;