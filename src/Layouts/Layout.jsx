import React, { Suspense, lazy } from "react";
const Navbar = lazy(() => import("../Components/Navbar"));
const Footer=lazy(()=> import('../Components/Footer'));
const Layout = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </Suspense>
  );
};

export default Layout;
