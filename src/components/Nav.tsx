"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    }, 
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    }
];

const Nav = () => {
  return (
    <nav>desktop nav</nav>
  )
}

export default Nav