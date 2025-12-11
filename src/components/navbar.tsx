"use client";
import { FC } from "react";
import clsx from "clsx";
import { useWindowScroll } from "react-use";
import Link from "next/link";
import MobileNavMenu from "./MobileMenu";
import { useMounted } from "@/hooks/useMounter";
import { Logo } from "@/ui/icons/logo";
import type { NavBarProps } from "@/types";

const NavBar: FC<NavBarProps> = ({ children }) => {
  const { y } = useWindowScroll();
  const isMounted = useMounted();
  const hasScrolled = isMounted && y > 50;

  return (
    <header
      className={clsx(
        "py-5 h-[100px] fixed top-0 left-0 w-full z-50 duration-300 min-w-[290px]",
        hasScrolled
          ? "bg-base-200 shadow-primary-900 shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center relative">
          <div className="max-w-[183px] lg:max-w-[163px]">
            <Link href="/">
              <Logo width={183} height={50} priority />
            </Link>
          </div>
          {children}
          <MobileNavMenu />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
