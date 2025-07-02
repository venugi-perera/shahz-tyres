"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    // { name: "MOT Testing", href: "/services/mot" },
    // { name: "Car Servicing", href: "/services/car-servicing" },
    // { name: "Timing Belt", href: "/services/timing-belt" },
    // { name: "Welding", href: "/services/welding" },
    // { name: "Mechanical Repairs", href: "/services/mechanical-repairs" },
    { name: "Tyres", href: "/services/tyres" },
    { name: "Car Welding", href: "/services/car-welding" },
    { name: "Home Welding", href: "/services/home-welding" },
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-16 h-16 relative">
              <Image
                src="/logo.png" // Replace with your image path
                alt="Shahz Tyres Logo"
                fill
                className="rounded-full object-cover"
              />
            </div>

            <span className="text-xl font-semibold text-white">
              Shahz Tyres
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link
                      href={service.href}
                      className="text-white hover:text-blue-400"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className="text-white hover:text-blue-400 transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>

            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              asChild
            >
              <a
                href="https://wa.me/447123456789?text=Hi%20ATB%20Motor%20Engineers,%20I%20would%20like%20to%20enquire%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-slate-900 border-slate-800"
            >
              <div className="flex flex-col space-y-6 mt-8">
                <Link
                  href="/"
                  className="text-white hover:text-blue-400 transition-colors text-lg"
                >
                  Home
                </Link>

                <div className="space-y-3">
                  <span className="text-white text-lg font-medium">
                    Services
                  </span>
                  <div className="pl-4 space-y-3">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/about"
                  className="text-white hover:text-blue-400 transition-colors text-lg"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="text-white hover:text-blue-400 transition-colors text-lg"
                >
                  Contact
                </Link>

                <Button
                  className="bg-green-600 hover:bg-green-700 text-white w-fit"
                  asChild
                >
                  <a
                    href="https://wa.me/447123456789?text=Hi%20ATB%20Motor%20Engineers,%20I%20would%20like%20to%20enquire%20about%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
