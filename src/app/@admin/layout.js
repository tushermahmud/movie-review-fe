import { NavigationMenuDemo } from "@/components/NavigationMenu/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <NavigationMenuDemo />

      {children}
    </div>
  );
};

export default layout;
