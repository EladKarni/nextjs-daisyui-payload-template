import { useState } from "react";
import { navLinkList } from "@/constants/navLinks";
import ThemeToggle from "./ThemeToggle";
import CTAButton from "@/ui/CTAButton";
import Link from "next/link";

const MobileNavMenu = () => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

    return (
        <div className="lg:hidden">
            <button
                className="align-middle"
                onClick={() => setIsOpenMobileMenu(true)}
                aria-label="Open navigation menu"
            >
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_67_34)">
                        <path
                            d="M20 18C20.2549 18.0003 20.5 18.0979 20.6854 18.2728C20.8707 18.4478 20.9822 18.687 20.9972 18.9414C21.0121 19.1958 20.9293 19.4464 20.7657 19.6418C20.6021 19.8373 20.3701 19.9629 20.117 19.993L20 20H4C3.74512 19.9997 3.49997 19.9021 3.31463 19.7272C3.1293 19.5522 3.01777 19.313 3.00283 19.0586C2.98789 18.8042 3.07067 18.5536 3.23426 18.3582C3.39786 18.1627 3.6299 18.0371 3.883 18.007L4 18H20ZM20 11C20.2652 11 20.5196 11.1054 20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12C21 12.2652 20.8946 12.5196 20.7071 12.7071C20.5196 12.8946 20.2652 13 20 13H4C3.73478 13 3.48043 12.8946 3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11H20ZM20 4C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5C21 5.26522 20.8946 5.51957 20.7071 5.70711C20.5196 5.89464 20.2652 6 20 6H4C3.73478 6 3.48043 5.89464 3.29289 5.70711C3.10536 5.51957 3 5.26522 3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H20Z"
                            fill="currentColor"
                            className="text-base-content"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_67_34">
                            <rect width={24} height={24} fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>

            <div
                onClick={() => setIsOpenMobileMenu(false)}
                id="mobileMenuOverlay"
                className={`fixed top-0 right-0 w-full h-[100dvh] bg-base-300/60 backdrop-blur-sm z-[9999999] transition-all duration-200 ${
                    isOpenMobileMenu
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none delay-300"
                }`}
            >
                <div
                    className={`w-[80%] sm:w-[300px] justify-between pt-4 pb-4 bg-base-100/95 backdrop-blur-md border-l border-base-300/50 h-full transition-all duration-300 flex flex-col float-right shadow-xl ${
                        isOpenMobileMenu ? "translate-x-0 delay-200" : "translate-x-full"
                    }`}
                >
                    <div className="text-end mr-2 pr-2" id="mobileMenuX">
                        <button
                            className="p-3 text-base-content/70 hover:text-base-content transition-colors duration-200 text-xl font-light"
                            onClick={() => setIsOpenMobileMenu(false)}
                            aria-label="Close navigation menu"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="flex flex-col h-full">
                        <ul className="text-center flex-1">
                            {navLinkList.map((navLink) => (
                                <li key={navLink.label}>
                                    <Link
                                        onClick={() => setIsOpenMobileMenu(false)}
                                        className="block px-5 py-4 text-base-content/80 hover:text-base-content hover:bg-base-200/50 transition-all duration-200 font-light tracking-wide"
                                        href={navLink.url}
                                    >
                                        {navLink.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col items-center gap-4 pb-8">
                            <ThemeToggle />
                            <CTAButton href="/#contact" size="md" onClick={() => setIsOpenMobileMenu(false)}>
                                Get in Touch
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavMenu;