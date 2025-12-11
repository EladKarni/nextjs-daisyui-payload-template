"use client";

import { navLinkList } from "@/constants/navLinks";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import CTAButton from "@/ui/CTAButton";

const NavLinks = () => {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinkList
                .filter(link => link.url.includes("#"))
                .map(link => link.url.split("#")[1]);

            // Add the home section check
            const scrollY = window.scrollY;

            // If at top of page, set home as active
            if (scrollY < 100) {
                setActiveSection("/");
                return;
            }

            // Find the current section in view
            for (const sectionId of sections.reverse()) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if section is in viewport (with offset for navbar)
                    if (rect.top <= 150) {
                        setActiveSection(`/#${sectionId}`);
                        return;
                    }
                }
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (url: string) => {
        if (url === "/") {
            return activeSection === "/" || activeSection === "";
        }
        return activeSection === url;
    };

    return (
        <nav className="flex items-center gap-6 max-lg:hidden">
            <ul className="flex items-center gap-6">
                {navLinkList.map((navLink) => (
                    <li key={navLink.url}>
                        <Link
                            className={`relative text-base-content font-semibold text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:transition after:duration-300 after:origin-center ${isActive(navLink.url)
                                    ? "text-primary after:scale-x-100"
                                    : "after:scale-x-0 after:hover:scale-x-100"
                                }`}
                            href={navLink.url}
                        >
                            {navLink.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <ThemeToggle />
            <CTAButton href="/#contact" size="sm">
                Get in Touch
            </CTAButton>
        </nav>
    );
};

export default NavLinks;