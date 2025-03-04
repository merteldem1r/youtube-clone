import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HostLayout from "./components/HostLayout";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVanDetails from "./pages/Host/Vans/HostVanDetails";
import HostVanLayout from "./pages/Host/Vans/HostVanLayout";
import HostVanPhotos from "./pages/Host/Vans/HostVanPhotos";
import HostVanPricing from "./pages/Host/Vans/HostVanPricing";
import HostVans from "./pages/Host/Vans/HostVans";
import NotFound from "./pages/NotFound";
import VanPage from "./pages/Vans/VanPage";
import Vans from "./pages/Vans/Vans";
import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:id" element={<VanPage />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />
        {/* Host vans info */}
        <Route path="vans/:id" element={<HostVanLayout />}>
          <Route index element={<HostVanDetails />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
      {/* route for wrong paths */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="page">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
