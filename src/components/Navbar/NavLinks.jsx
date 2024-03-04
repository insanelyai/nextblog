"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ToggleMode from "../ToggleMode/ToggleMode";

const links = () => {
  return (
    <>
      <nav className='flex gap-4'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={"/"} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`text-base ${navigationMenuTriggerStyle()}`}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={"/blog"} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`text-base ${navigationMenuTriggerStyle()}`}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={"/contact"} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`text-base ${navigationMenuTriggerStyle()}`}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ToggleMode />
      </nav>
    </>
  );
};

export default links;
