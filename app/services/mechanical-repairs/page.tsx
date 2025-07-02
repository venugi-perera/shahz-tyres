import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wrench, Cog, Car, CheckCircle } from "lucide-react"

export default function MechanicalRepairsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="border-blue-500 text-blue-400 bg-blue-500/10 mb-6">
              <Wrench className="w-4 h-4 mr-2" />
              Expert Diagnostics & Repair
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-blue-400">Mechanical</span> Repairs
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive mechanical repair services for all makes and models. Our experienced technicians diagnose
              and fix mechanical issues quickly and efficiently, getting you back on the road with confidence.
            </p>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Book Repair Service
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Mechanical Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Engine Repairs</h3>
              <p className="text-gray-400 mb-4">
                Complete engine diagnostics and repair services to restore power and performance.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Engine diagnostics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Head gasket repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Timing chain repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Engine rebuilds</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transmission Repairs</h3>
              <p className="text-gray-400 mb-4">
                Expert transmission diagnostics and repairs for manual and automatic gearboxes.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Clutch replacement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Gearbox repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>CV joint replacement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Driveshaft repairs</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brake System Repairs</h3>
              <p className="text-gray-400 mb-4">
                Complete brake system diagnostics and repairs for optimal stopping power.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Brake pad replacement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Disc & drum repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Brake fluid service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>ABS diagnostics</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Suspension & Steering</h3>
              <p className="text-gray-400 mb-4">
                Professional suspension and steering repairs for safe, comfortable driving.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Shock absorber replacement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Spring repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Power steering service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Wheel alignment</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cooling System</h3>
              <p className="text-gray-400 mb-4">
                Complete cooling system maintenance and repairs to prevent overheating.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Radiator repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Water pump replacement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Thermostat service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Coolant system flush</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Electrical Systems</h3>
              <p className="text-gray-400 mb-4">
                Advanced electrical diagnostics and repairs for modern vehicle systems.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Battery & alternator testing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Starter motor repairs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Wiring fault diagnosis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>ECU diagnostics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Process */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Repair Process</h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Diagnosis</h3>
                <p className="text-gray-400">
                  Comprehensive diagnostic testing to identify the root cause of the problem
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quote</h3>
                <p className="text-gray-400">Detailed quote with transparent pricing and no hidden costs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Repair</h3>
                <p className="text-gray-400">Expert repair work using quality parts and proven techniques</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Test</h3>
                <p className="text-gray-400">Thorough testing to ensure the repair is complete and reliable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Expert Mechanical Repairs</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't let mechanical problems keep you off the road. Our experienced technicians are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Book Diagnostic
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
