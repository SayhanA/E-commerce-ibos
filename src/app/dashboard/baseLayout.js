import Footer from "@/Components/organisms/Footer";
import NavBar from "@/Components/organisms/NavBar";

import React from "react";

const BaseLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
