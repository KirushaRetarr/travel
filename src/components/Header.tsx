"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import SignUpModal from "./SignUpModal";

export const TicketLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M8 4C6.89543 4 6 4.89543 6 6V10C7.10457 10 8 10.8954 8 12C8 13.1046 7.10457 14 6 14V18C6 19.1046 6.89543 20 8 20H24C25.1046 20 26 19.1046 26 18V14C24.8954 14 24 13.1046 24 12C24 10.8954 24.8954 10 26 10V6C26 4.89543 25.1046 4 24 4H8ZM8 6H24V8H8V6ZM8 10V12H24V10H8ZM8 14V16H24V14H8ZM8 18V20H24V18H8Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Главная", href: "/" },
    { name: "Мероприятия", href: "/events" },
    { name: "О нас", href: "/about" },
    { name: "Контакты", href: "/contacts" },
    { name: "Помощь", href: "/help" },
  ];

  const mobileMenuItems = [
    "Главная",
    "Мероприятия",
    "О нас",
    "Контакты",
    "Помощь",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="w-full flex items-center justify-center px-4 border-b border-gray-200 h-[60px]"
    >
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <TicketLogo />
          <p className="font-bold text-inherit">TicketBooking</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem isActive={pathname === "/"}>
          <Link color="foreground" href="/">
            Главная
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/events"}>
          <Link color="foreground" href="/events">
            Мероприятия
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/about"}>
          <Link color="foreground" href="/about">
            О нас
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/contacts"}>
          <Link color="foreground" href="/contacts">
            Контакты
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Войти</Link>
        </NavbarItem>
        <NavbarItem>
          <SignUpModal />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {mobileMenuItems.map((item, index) => {
          const href = menuItems[index]?.href || "/";
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === mobileMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={href}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}

