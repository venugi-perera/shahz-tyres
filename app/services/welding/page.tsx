import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Flame, Shield, Wrench, CheckCircle } from "lucide-react"

export default function WeldingPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="border-blue-500 text-blue-400 bg-blue-500/10 mb-6">
              <Flame className="w-4 h-4 mr-2" />
              Professional Fabrication
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-blue-400">Welding</span> Services
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional welding and fabrication services for all types of vehicles. From exhaust repairs to custom
              fabrication work, our skilled welders deliver high-quality results that meet the highest safety standards.
            </p>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Welding Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Welding Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exhaust System Welding</h3>
              <p className="text-gray-400 mb-4">
                Professional exhaust pipe welding and repair services to restore your vehicle's performance and reduce
                emissions.
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
              <h3 className="text-xl font-semibold mb-3">Chassis & Body Welding</h3>
              <p className="text-gray-400 mb-4">
                Structural welding for chassis repairs, body work, and MOT failure rectification to ensure your
                vehicle's safety.
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
              <h3 className="text-xl font-semibold mb-3">Custom Fabrication</h3>
              <p className="text-gray-400 mb-4">
                Bespoke welding and fabrication services for custom automotive projects and specialized requirements.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Custom brackets</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Mounting points</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Specialized repairs</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Suspension Welding</h3>
              <p className="text-gray-400 mb-4">
                Professional welding services for suspension components and mounting points to ensure safe handling.
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
              <h3 className="text-xl font-semibold mb-3">Brake System Welding</h3>
              <p className="text-gray-400 mb-4">
                Critical brake system welding and repairs to maintain your vehicle's stopping power and safety.
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
                Fast emergency welding services to get you back on the road quickly when unexpected failures occur.
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
                  <span>Mobile welding available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Quality & Safety Standards</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Our Welding Standards</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Certified Welders</h4>
                      <p className="text-gray-400 text-sm">
                        All welding carried out by qualified and experienced professionals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Quality Materials</h4>
                      <p className="text-gray-400 text-sm">High-grade welding materials and consumables used</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Safety First</h4>
                      <p className="text-gray-400 text-sm">All work meets or exceeds safety regulations</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Thorough Testing</h4>
                      <p className="text-gray-400 text-sm">All welds tested and inspected before completion</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Welding Techniques</h3>
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">MIG Welding</h4>
                    <p className="text-gray-400 text-sm">Metal Inert Gas welding for clean, strong joints</p>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">TIG Welding</h4>
                    <p className="text-gray-400 text-sm">Tungsten Inert Gas welding for precision work</p>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Arc Welding</h4>
                    <p className="text-gray-400 text-sm">Traditional stick welding for heavy-duty repairs</p>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Gas Welding</h4>
                    <p className="text-gray-400 text-sm">Oxy-acetylene welding for specialized applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Professional Welding?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            From simple repairs to complex fabrication, our skilled welders deliver quality results you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Welding Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
            >
              Call for Emergency Service
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
