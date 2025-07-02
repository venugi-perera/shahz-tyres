"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg animate-pulse"
        asChild
      >
        <a
          href="https://wa.me/447123456789?text=Hi%20ATB%20Motor%20Engineers,%20I%20would%20like%20to%20enquire%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <Phone className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
}
