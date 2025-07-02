import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Car, Wrench, Shield, Clock } from "lucide-react";
import ContactPage from "./contact/page";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="border-blue-500 text-blue-400 bg-blue-500/10"
              >
                <Car className="w-4 h-4 mr-2" />
                Derby's Premier Auto Experts
              </Badge>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Precision
                  <br />
                  <span className="text-blue-400">Motor Engineering</span>
                </h1>

                <p className="text-xl text-gray-300 max-w-lg">
                  At Shahz tyres, we combine advanced technology with expert
                  craftsmanship to deliver exceptional automotive services
                  tailored to your needs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Fast Turnaround</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wrench className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Expert Technicians</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Competitive Pricing</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3807167/pexels-photo-3807167.jpeg"
                  alt="Professional mechanic working on car engine"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-6 right-6">
                  <Badge className="bg-blue-600 text-white text-lg px-4 py-2">
                    40+ Years Experience
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-blue-400 text-sm">Discover More</span>
            <ChevronDown className="w-6 h-6 text-blue-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive automotive services to keep your vehicle running at
              its best
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "MOT Testing",
                description:
                  "Professional MOT testing to ensure your vehicle meets safety standards",
                href: "/services/mot",
              },
              {
                title: "Car Servicing",
                description:
                  "Complete vehicle servicing to maintain optimal performance",
                href: "/services/car-servicing",
              },
              {
                title: "Timing Belt Replacement",
                description:
                  "Expert timing belt services to prevent costly engine damage",
                href: "/services/timing-belt",
              },
              {
                title: "Welding Services",
                description:
                  "Professional welding and fabrication for all vehicle types",
                href: "/services/welding",
              },
              {
                title: "Mechanical Repairs",
                description:
                  "Comprehensive mechanical repairs by experienced technicians",
                href: "/services/mechanical-repairs",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - see what our satisfied customers
              have to say
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Brilliant service by the team at Shahz tyres. Quick efficient
                and cheap! Definitely recommend for all types of tyres. He
                mentioned that if I wanted a specific tyre he'll order it for
                me. 10/10 customer service. 100% would recommend!"
              </p>
              <p className="text-blue-400 font-semibold">
                - Mahir Jetha Productions
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "I've done both my cars here in the last few months, great
                service great prices no complaints. Will use again 100%"
              </p>
              <p className="text-blue-400 font-semibold">- Ronnie A</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Fast and professional service. New tyres and good quality for a
                good price"
              </p>
              <p className="text-blue-400 font-semibold">- Andrei Hanceariuc</p>
            </div>
          </div>
        </div>
      </section>
      <ContactPage />
    </div>
  );
}
