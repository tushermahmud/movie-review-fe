// pages/404.js
"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const NotFound = () => {
  const storedState = Cookies.get("token");
  const router = useRouter();

  useEffect(() => {
    if (!storedState) {
      router.push("/"); // Redirect to login page after logout
      //  // Redirect to login page after logout
      // if (pathname !== '/') {
      //   redirect('/');
      // }
    }
  }, [router, storedState]);

  return <></>;
};

export default NotFound;
