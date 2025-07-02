import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Flame, Clock, CheckCircle, Phone, MapPin } from "lucide-react";

export default function HomeWeldingPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="border-blue-500 text-blue-400 bg-blue-500/10 mb-6"
            >
              <Home className="w-4 h-4 mr-2" />
              Mobile Welding Service
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-blue-400">Home</span> Welding
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional mobile welding services brought directly to your
              location. Whether it's your home, business, or roadside, we bring
              our expertise and equipment to you for maximum convenience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Book Mobile Service
              </Button>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                asChild
              >
                <a
                  href="https://wa.me/447123456789?text=Hi%20ATB%20Motor%20Engineers,%20I%20need%20mobile%20welding%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Mobile Welding Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">At Your Home</h3>
              <p className="text-gray-400 mb-4">
                Professional welding services at your home for gates, railings,
                and general repairs.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Garden gates & railings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Security grilles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>General metal repairs</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                On-Site Vehicle Repairs
              </h3>
              <p className="text-gray-400 mb-4">
                Emergency vehicle welding repairs at your location when you
                can't get to our garage.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Exhaust repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Chassis emergency repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Roadside assistance</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Commercial Services
              </h3>
              <p className="text-gray-400 mb-4">
                Mobile welding for businesses, workshops, and commercial
                properties.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Industrial repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Equipment fabrication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Structural repairs</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency Call-Out</h3>
              <p className="text-gray-400 mb-4">
                24/7 emergency mobile welding service for urgent repairs that
                can't wait.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>24/7 availability</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Fast response time</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Emergency repairs</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Fabrication</h3>
              <p className="text-gray-400 mb-4">
                Bespoke welding and fabrication work created at your location to
                your specifications.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Custom metalwork</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Bespoke solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>On-site installation</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Maintenance Contracts
              </h3>
              <p className="text-gray-400 mb-4">
                Regular mobile welding maintenance for businesses and property
                managers.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Scheduled maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Priority service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Competitive rates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Service Areas
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              We provide mobile welding services throughout Derby and
              surrounding areas
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg p-6">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Derby City</h3>
                <p className="text-gray-400 text-sm">
                  Full coverage within Derby city limits
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Surrounding Areas
                </h3>
                <p className="text-gray-400 text-sm">
                  Within 15 miles of Derby center
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Extended Coverage
                </h3>
                <p className="text-gray-400 text-sm">
                  Special arrangements for further distances
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-800/40">
        <div className="container mx-auto px-4 text-gray-300 text-center">
          <h2 className="text-4xl font-bold mb-12">
            How Our Mobile Welding Service Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Request a Visit</h3>
              <p>
                Contact us via phone, WhatsApp, or online form. Describe the
                issue or upload images for a quick estimate.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Get a Quote</h3>
              <p>
                We send you a detailed quote. For urgent jobs, we can provide
                pricing on-site before we begin.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. On-Site Welding</h3>
              <p>
                We arrive at the scheduled time with our mobile rig and complete
                the work at your location.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                4. Clean-Up & Inspection
              </h3>
              <p>
                After welding, we inspect the work for quality and safety, and
                clean the work area before leaving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Mobile Welding Services?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We bring professional welding services directly to you. Contact us
            for a quote and convenient scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Book Mobile Service
            </Button>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              asChild
            >
              <a
                href="https://wa.me/447123456789?text=Hi,%20I%20need%20mobile%20welding%20services%20at%20my%20location"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp for Quote
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
