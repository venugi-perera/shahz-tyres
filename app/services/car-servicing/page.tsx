import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wrench, Shield, Clock, CheckCircle } from "lucide-react";

export default function CarServicingPage() {
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
              <Wrench className="w-4 h-4 mr-2" />
              Professional Maintenance
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-blue-400">Car</span> Servicing
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Regular car servicing is essential for maintaining your vehicle's
              performance, safety, and reliability. Our comprehensive servicing
              packages are designed to keep your car running smoothly and help
              prevent costly repairs down the road.
            </p>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Book Service
            </Button>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Service Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Basic Service</h3>
              <p className="text-gray-400 mb-6">
                Essential checks and maintenance for everyday driving
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Oil & filter change</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Fluid level checks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Tyre inspection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Battery test</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
              >
                From £89
              </Button>
            </div>

            <div className="bg-slate-800 rounded-lg p-8 text-center border-2 border-blue-500">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Full Service</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive inspection and maintenance package
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Everything in Basic Service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Brake system check</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Suspension inspection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Exhaust system check</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700">
                From £149
              </Button>
            </div>

            <div className="bg-slate-800 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Major Service</h3>
              <p className="text-gray-400 mb-6">
                Complete vehicle health check and maintenance
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Everything in Full Service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Timing belt inspection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Clutch operation check</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Air conditioning service</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
              >
                From £199
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Shahz tyres?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-400">
                Qualified mechanics with decades of experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Parts</h3>
              <p className="text-gray-400">
                Only genuine and high-quality replacement parts used
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
              <p className="text-gray-400">
                Efficient service to get you back on the road quickly
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Warranty</h3>
              <p className="text-gray-400">
                All work comes with our comprehensive warranty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Keep Your Car Running Smoothly
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Regular servicing saves money in the long run and keeps you safe on
            the road. Book your service today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Book Service Online
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
