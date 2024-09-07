import Footer from "@/Components/organisms/Footer";
import NavBar from "@/Components/organisms/NavBar";

import React from "react";

const BaseLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="min-h-[15vw]">{children}</div>
      <Footer />
    </>
  );
};

export default BaseLayout;
