import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, Shield, Wrench, CheckCircle, Phone } from "lucide-react";

export default function CarWeldingPage() {
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
              <Flame className="w-4 h-4 mr-2" />
              Professional Automotive Welding
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-blue-400">Car</span> Welding
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert automotive welding services for all types of vehicle
              repairs. From exhaust systems to chassis work, our skilled welders
              deliver high-quality results that meet safety standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Welding Quote
              </Button>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                asChild
              >
                <a
                  href="https://wa.me/447123456789?text=Hi%20ATB%20Motor%20Engineers,%20I%20need%20car%20welding%20services"
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
            Car Welding Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exhaust Welding</h3>
              <p className="text-gray-400 mb-4">
                Professional exhaust system welding and repairs to restore
                performance and reduce emissions.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Exhaust pipe repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Silencer welding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Catalytic converter fitting</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Chassis Welding</h3>
              <p className="text-gray-400 mb-4">
                Structural welding for chassis repairs and MOT failure
                rectification to ensure vehicle safety.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Chassis repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Sill welding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>MOT failure repairs</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Body Welding</h3>
              <p className="text-gray-400 mb-4">
                Professional bodywork welding for accident repairs and rust
                damage restoration.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Panel repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Rust damage repair</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Accident damage welding</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Suspension Welding</h3>
              <p className="text-gray-400 mb-4">
                Expert welding for suspension components and mounting points to
                ensure safe handling.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Spring mounting repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Shock absorber mounts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Anti-roll bar repairs</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brake Welding</h3>
              <p className="text-gray-400 mb-4">
                Critical brake system welding to maintain your vehicle's
                stopping power and safety.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Brake line repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Caliper mounting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Brake component fabrication</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency Welding</h3>
              <p className="text-gray-400 mb-4">
                Fast emergency welding services to get you back on the road when
                unexpected failures occur.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Same-day service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Temporary repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Quick turnaround</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Quality & Safety Standards
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Welders</h3>
              <p className="text-gray-400">
                Qualified professionals with years of automotive welding
                experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
              <p className="text-gray-400">
                High-grade welding materials and consumables for lasting repairs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-400">
                All work meets or exceeds automotive safety regulations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thorough Testing</h3>
              <p className="text-gray-400">
                All welds tested and inspected before job completion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Our Welding Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
            <div className="bg-slate-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Precision & Expertise
              </h3>
              <p>
                Our certified technicians have decades of combined experience in
                MIG, TIG, and Arc welding for all vehicle types.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Affordable Pricing</h3>
              <p>
                We offer competitive rates without compromising on quality.
                Clear quotes and no hidden fees.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Quick Turnaround</h3>
              <p>
                We understand time is critical—most jobs completed within the
                same day or 24 hours.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Custom Fabrication</h3>
              <p>
                Need something unique? We handle one-off custom welds for
                classic cars, performance builds, and restorations.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Mobile Welding</h3>
              <p>
                Can't come to us? We offer mobile welding for breakdowns,
                emergency repairs, and off-site fabrication.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Warranty Included</h3>
              <p>
                All welding work is backed by a satisfaction guarantee and
                workmanship warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-slate-800/40">
        <div className="container mx-auto px-4 text-center text-gray-300">
          <h2 className="text-4xl font-bold mb-12">Our Welding Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Inspection</h3>
              <p>
                We begin by inspecting the damage or requirement and identifying
                the best welding method for the job.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Preparation</h3>
              <p>
                We clean and prep the metal surfaces to ensure strong, lasting
                welds and optimal safety.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Welding</h3>
              <p>
                Our expert team performs precision welding using
                industry-standard equipment and techniques.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">4. Testing</h3>
              <p>
                Every weld is tested and inspected to meet our high quality and
                safety benchmarks before delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Professional Car Welding?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            From simple repairs to complex fabrication, our skilled welders
            deliver quality results you can trust.
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
                href="https://wa.me/447123456789?text=Hi,%20I%20need%20car%20welding%20services"
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
