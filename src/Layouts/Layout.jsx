import React, { Suspense } from "react";

const Layout = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main>{children}</main>
    </Suspense>
  );
};

export default Layout;
