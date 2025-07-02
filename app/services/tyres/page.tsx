import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, Shield, Clock, CheckCircle, Phone } from "lucide-react";

export default function TyresPage() {
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
              <Car className="w-4 h-4 mr-2" />
              Professional Tyre Services
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-blue-400">Tyre</span> Services
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional tyre fitting, balancing, and alignment services for
              all vehicle types. We stock a wide range of premium tyres and
              offer competitive prices with expert installation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Tyre Quote
              </Button>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                asChild
              >
                <a
                  href="https://wa.me/447123456789?text=Hi%20ATB%20Motor%20Engineers,%20I%20need%20new%20tyres%20for%20my%20vehicle"
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
            Our Tyre Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tyre Fitting</h3>
              <p className="text-gray-400 mb-4">
                Professional tyre fitting service with proper balancing and
                alignment for optimal performance.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Expert installation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Wheel balancing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Valve replacement</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tyre Repairs</h3>
              <p className="text-gray-400 mb-4">
                Quick and reliable tyre repair services to get you back on the
                road safely.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Puncture repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Sidewall damage assessment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Emergency repairs</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Wheel Alignment</h3>
              <p className="text-gray-400 mb-4">
                Precision wheel alignment service to ensure even tyre wear and
                optimal handling.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>4-wheel alignment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Tracking adjustment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Camber correction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tyre Brands */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Premium Tyre Brands
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Michelin",
              "Bridgestone",
              "Continental",
              "Pirelli",
              "Goodyear",
              "Dunlop",
              "Hankook",
              "Falken",
            ].map((brand, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-blue-400">{brand}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Premium quality tyres
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 mb-6">
              Can't find the tyre you need? We can order any specific tyre for
              you!
            </p>
            <Button className="bg-green-600 hover:bg-green-700" asChild>
              <a
                href="https://wa.me/447123456789?text=Hi,%20I%20need%20a%20specific%20tyre%20ordered"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                Request Special Order
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Tyre Balancing */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Tyre Balancing
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <p className="text-gray-400 mb-4">
                Imbalanced tyres can cause steering vibrations, uneven wear, and
                reduce overall ride comfort. Our computerised tyre balancing
                ensures smooth rotation and improved driving dynamics.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  Precision digital balancing machines
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  Static and dynamic balancing methods
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  Weights adjusted for optimal performance
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">
                Signs You Need Balancing
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  Steering wheel vibration at certain speeds
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  Uneven tread wear patterns
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  Increased fuel consumption
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Tyre Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Seasonal Tyre Changeovers
          </h2>
          <div className="bg-slate-800 rounded-lg p-6 text-gray-300">
            <p className="mb-4">
              If you drive in areas with changing climates, seasonal tyre
              changeovers can enhance grip, safety, and performance. We offer
              quick swaps and storage options for your summer and winter sets.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                Summer-to-winter and winter-to-summer changeovers
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                Inspection of tyre condition before re-installation
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                Optional storage for off-season tyres
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need New Tyres?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get expert advice and competitive prices on premium tyres. Quick,
            efficient service guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Free Quote
            </Button>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              asChild
            >
              <a
                href="https://wa.me/447123456789?text=Hi%20ATB%20Motor%20Engineers,%20I%20need%20new%20tyres"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp Quote
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
