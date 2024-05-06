'use client'

import Link from "next/link";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "GuestBook", href: "/guestbook" },
  { name: "Projects", href: "/projects" },
];

const Navbar = () => {
    const pathname = usePathname();
  
  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12">
      <div className="col-span-7 md:col-span-3">
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold">
            Ahmad <span className="text-green-500 ">Hanki</span>
          </h1>
        </Link>
      </div>

      <div className="hidden sm:flex justify-center items-center col-span-5">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item, i) => (
              <NavigationMenuItem key={i}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink active={pathname == item.href} className={navigationMenuTriggerStyle()}>
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center justify-end md:col-span-3 col-span-5">
        <Link href={'/contact'}>
        <Button className="hidden md:block">
            Contact Me
        </Button>
        </Link>

        <div className="sm:hidden">
            <MobileMenu/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
