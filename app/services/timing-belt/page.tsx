import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, Wrench, Shield } from "lucide-react";

export default function TimingBeltPage() {
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
              Critical Engine Component
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-blue-400">Timing Belt</span> Replacement
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The timing belt is one of your engine's most critical components.
              When it fails, it can cause catastrophic engine damage costing
              thousands of pounds. Don't take the risk – let our experts replace
              your timing belt before it's too late.
            </p>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Book Timing Belt Service
            </Button>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-20 bg-red-900/20 border-y border-red-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-red-400">
              Don't Ignore the Warning Signs
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              A broken timing belt can cause pistons to collide with valves,
              resulting in bent valves, damaged pistons, and potentially a
              completely destroyed engine. The cost of prevention is a fraction
              of the cost of repair.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="font-semibold mb-2 text-red-400">
                  Engine Won't Start
                </h3>
                <p className="text-gray-400 text-sm">
                  If your timing belt has snapped, your engine won't start at
                  all
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="font-semibold mb-2 text-red-400">
                  Unusual Noises
                </h3>
                <p className="text-gray-400 text-sm">
                  Squealing or grinding sounds from the engine bay
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="font-semibold mb-2 text-red-400">
                  Engine Misfiring
                </h3>
                <p className="text-gray-400 text-sm">
                  Poor performance and irregular engine operation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Timing Belt Service
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                  What's Included
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">
                        Complete Belt Replacement
                      </h4>
                      <p className="text-gray-400 text-sm">
                        High-quality timing belt fitted to manufacturer
                        specifications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">
                        Tensioner & Idler Pulleys
                      </h4>
                      <p className="text-gray-400 text-sm">
                        All related components replaced as a complete kit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">
                        Water Pump (if required)
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Often replaced simultaneously to prevent future issues
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Timing Adjustment</h4>
                      <p className="text-gray-400 text-sm">
                        Precise timing set to ensure optimal engine performance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                  Replacement Schedule
                </h3>
                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                      <span className="font-medium">Most Vehicles</span>
                      <span className="text-blue-400">
                        60,000 - 100,000 miles
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                      <span className="font-medium">Time Interval</span>
                      <span className="text-blue-400">5 - 7 years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Check Manual</span>
                      <span className="text-blue-400">Vehicle specific</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-900/30 rounded-lg">
                    <p className="text-sm text-blue-300">
                      <strong>Important:</strong> Always follow your vehicle
                      manufacturer's recommended replacement intervals. We can
                      check your specific requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Shahz tyres for Timing Belt Service?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Expert Installation
              </h3>
              <p className="text-gray-400">
                Precise timing belt installation by experienced technicians
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Parts</h3>
              <p className="text-gray-400">
                OEM or equivalent quality timing belt kits
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Preventive Care</h3>
              <p className="text-gray-400">
                Proactive replacement before failure occurs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
              <p className="text-gray-400">
                Comprehensive warranty on all timing belt work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't Risk Engine Damage</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Timing belt replacement is essential preventive maintenance. Book
            your service today and protect your engine investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Book Timing Belt Service
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
  );
}
