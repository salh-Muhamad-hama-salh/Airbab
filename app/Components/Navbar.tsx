import Link from "next/link";
import React from "react";
import desktoplogo from "@/public/airbnb-desktop.png";
import mobilelogo from "@/public/airbnb-mobile.webp";
import Image from "next/image";
import UserNav from "./UserNav";

function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image
            src={desktoplogo}
            alt="logo"
            className="w-32 hidden lg:block"
          />
          <Image src={mobilelogo} alt="logo" className="w-12 block lg:hidden" />
        </Link>
        <div className="rounded-full border px-5 py-2">
          <h1>Hello from search</h1>
        </div>
        <UserNav />
      </div>
    </nav>
  );
}

export default Navbar;
