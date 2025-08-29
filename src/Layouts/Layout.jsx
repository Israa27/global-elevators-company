import React, { Suspense, lazy } from "react";
const Navbar = lazy(() => import("../Components/Navbar"));
const Footer=lazy(()=> import('../Components/Footer'));
const BackToTop=lazy(()=> import('../Components/BackToTop'));
const Layout = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <main>{children}</main>
       <BackToTop />
      <Footer/>
    </Suspense>
  );
};

export default Layout;
