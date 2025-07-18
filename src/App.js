

// React Router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

// Components
import NavbarMain from "./components/Navigation-Bar";
import Footer from "./components/Footer";
import ContactWidget from "./components/ContactWidget";

// Pages
import HomePage from "./Page/Home-page";
import Main from "./Page/Home-page/LandingPage";
import Career from "./Page/Career";
import NotFoundPage from "./Page/NotFoundPage";
import OurServicesSection from "./Page/Home-page/OurServicesSection";
import Certificate from "./Page/Home-page/Certificate";

// Services Pages
import BusinessLaw from "./Page/Services-page/BusinessLaw";
import TaxLaw from "./Page/Services-page/TaxLaw";
import OtherLaw from "./Page/Services-page/OtherLaw";
import Litigation from "./Page/Services-page/Litigation";
import Testament from "./Page/Services-page/Testament";
import TransferPricing from "./Page/Services-page/TransferPricing";


// Router Configuration
const router = createBrowserRouter([
  // Home
  { path: "/", element: <Navigate to="/home" replace /> },
  { path: "/home", element: <HomePage /> },

  // Services
  { path: "/services/business-law", element: <BusinessLaw /> },
  { path: "/services/tax-law", element: <TaxLaw /> },
  { path: "/services/other-law", element: <OtherLaw /> },
  { path: "/services/litigation", element: <Litigation /> },
  { path: "/services/transfer-pricing", element: <TransferPricing /> },
  { path: "/services/testament", element: <Testament /> },

  // Other Pages
  { path: "/careers", element: <Career /> },
  { path: "/services", element: <OurServicesSection /> },
  { path: "/main", element: <Main /> },
  { path: "/certificate", element: <Certificate /> },
  { path: "/*", element: <NotFoundPage /> },
]);


// Main App Component
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
