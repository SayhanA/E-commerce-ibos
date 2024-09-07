import NavBar from "@/Components/organisms/NavBar";

import React from "react";

const BaseLayout = ({ children }) => {
  return (
    <>
      {/* <NavBar /> */}
      {children}
    </>
  );
};

export default BaseLayout;
