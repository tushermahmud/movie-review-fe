import { BottomBar } from "@/components/NavigationMenu/BottomBar";
import { NavigationMenuDemo } from "@/components/NavigationMenu/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <NavigationMenuDemo className="sticky top-0" />
      <main className="overflow-auto">{children}</main>
      <BottomBar className="sticky bottom-0" />
    </div>
  );
};

export default layout;
