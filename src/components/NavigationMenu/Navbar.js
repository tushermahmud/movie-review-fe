"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@radix-ui/react-menubar";
import { MenubarShortcut } from "../ui/menubar";
import Cookies from "js-cookie";
import useAuthAPI from "@/context/API/AuthAPI";

// const user = {
//   name: "John Doe",
//   avatar: "/path-to-avatar.jpg", // replace with the actual path to the avatar image
// };

export function NavigationMenuDemo() {
  const { loggedInUser } = React.useContext(AuthContext);

  console.log({ imageName: `data:image/jpeg;base64,${loggedInUser?.photo}` });
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <NavigationMenu></NavigationMenu>
      <div className="flex items-center space-x-4">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <MenubarDemo loggedInUser={loggedInUser} />
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export function MenubarDemo({ loggedInUser }) {
  const { logoutUser } = useAuthAPI();
  return (
    <Menubar className="bg-white">
      <MenubarMenu>
        <div className="flex items-center space-x-2">
          <MenubarTrigger>
            <Image
              src={`data:image/jpeg;base64,${loggedInUser?.photo}`}
              alt={`${loggedInUser?.username}'s avatar`}
              className="w-8 h-8 rounded-full"
              width={50}
              height={50}
            />
            <span className="text-sm font-medium">
              {loggedInUser?.username}
            </span>
          </MenubarTrigger>
        </div>
        <MenubarContent>
          <MenubarItem
            onSelect={() => {
              logoutUser();
            }}
          >
            Logout
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
