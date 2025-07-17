
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import logo from "./logo.svg";
// Components
import NavbarMain from "./components/NavbarMain";
import Footer from "./components/Footer";
import ContactWidget from "./components/ContactWidget";
import Main from "./components/Main";
import Career from "./components/Career";
import NotFoundPage from "./components/NotFoundPage";
import OurServicesSection from "./components/OurServicesSection";

// Pages
import HomePage from "./components/Home-page";
import WelcomePage from "./components/Welcome-page";

// Services
import Legal from "./components/services/Legal";
import BusinessLaw from "./components/services/Legal/BusinessLaw";
import TaxLaw from "./components/services/Legal/TaxLaw";
import OtherLaw from "./components/services/Legal/OtherLaw";
import Litigation from "./components/services/Legal/Litigation";
import Testament from "./components/services/Legal/Testament";
import TransferPricing from "./components/services/Legal/TransferPricing";
import AccountingPayroll from "./components/services/Accounting-Payroll";
import Audit from "./components/services/Audit";
import InternalAudit from "./components/services/InternalAudit";
import WebIT from "./components/services/WebIT";


const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/home", element: <HomePage /> },

  // Services
  { path: "/services/legal", element: <Legal /> },
  { path: "/services/business-law", element: <BusinessLaw /> },
  { path: "/services/tax-law", element: <TaxLaw /> },
  { path: "/services/other-law", element: <OtherLaw /> },
  { path: "/services/litigation", element: <Litigation /> },
  { path: "/services/transfer-pricing", element: <TransferPricing /> },
  { path: "/services/testament", element: <Testament /> },
  { path: "/services/accounting-payroll", element: <AccountingPayroll /> },
  { path: "/services/audit", element: <Audit /> },
  { path: "/services/internal-audit", element: <InternalAudit /> },
  { path: "/services/web-it", element: <WebIT /> },

  // Other pages
  { path: "/careers", element: <Career /> },
  { path: "/services", element: <OurServicesSection /> },
  { path: "/main", element: <Main /> },
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
