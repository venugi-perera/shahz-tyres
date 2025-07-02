import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, FileText } from "lucide-react";

export default function MOTPage() {
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
              <Shield className="w-4 h-4 mr-2" />
              Professional Testing
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-blue-400">MOT</span> Testing
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The MOT (Ministry of Transport) test is a yearly inspection that
              ensures your vehicle meets important safety and environmental
              standards. It's a legal requirement – and having a valid MOT
              certificate not only keeps you road-legal but also helps keep your
              vehicle safe and reliable.
            </p>

            <p className="text-lg text-gray-400 mb-8">
              At Shahz tyres, we offer professional, dependable MOT testing to
              keep you on the road with confidence.
            </p>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Book MOT Test
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Testing</h3>
              <p className="text-gray-400">
                DVSA approved MOT testing station with qualified testers
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
              <p className="text-gray-400">
                Fast and efficient testing with minimal waiting time
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
              <p className="text-gray-400">
                Comprehensive test results with clear explanations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
              <p className="text-gray-400">
                Thorough inspection ensures your vehicle's safety
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Test Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              What We Test
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Lights & Electrical</h3>
                    <p className="text-gray-400">
                      Headlights, indicators, brake lights, and electrical
                      systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Brakes</h3>
                    <p className="text-gray-400">
                      Brake performance, condition, and handbrake efficiency
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Suspension</h3>
                    <p className="text-gray-400">
                      Shock absorbers, springs, and suspension components
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Tyres</h3>
                    <p className="text-gray-400">
                      Tread depth, condition, and proper inflation
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Exhaust & Emissions</h3>
                    <p className="text-gray-400">
                      Exhaust system integrity and emission levels
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Steering & Alignment</h3>
                    <p className="text-gray-400">
                      Steering response and wheel alignment
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Body & Structure</h3>
                    <p className="text-gray-400">
                      Structural integrity and corrosion assessment
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Safety Features</h3>
                    <p className="text-gray-400">
                      Seatbelts, mirrors, and other safety equipment
                    </p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your MOT?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait until the last minute. Book your MOT test today and
            ensure your vehicle stays road-legal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Book Online
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
            >
              Call Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
