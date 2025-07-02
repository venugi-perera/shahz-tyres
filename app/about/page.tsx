import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield } from "lucide-react";

export default function AboutPage() {
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
              <Award className="w-4 h-4 mr-2" />
              Established 1980
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-blue-400">Shahz tyres</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              For over 40 years, Shahz tyres has been Derby's trusted automotive
              service provider. We combine decades of experience with modern
              technology to deliver exceptional results for every customer.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                  Four Decades of Excellence
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Founded in 1980, Shahz tyres began as a small family-run
                    garage with a simple mission: to provide honest, reliable
                    automotive services to the Derby community. What started as
                    a one-man operation has grown into one of Derby's most
                    trusted automotive service centers.
                  </p>
                  <p>
                    Over the years, we've adapted to the changing automotive
                    landscape, investing in the latest diagnostic equipment and
                    training our technicians on the newest vehicle technologies.
                    Despite our growth, we've never lost sight of our core
                    values: quality workmanship, fair pricing, and exceptional
                    customer service.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of satisfied customers
                    throughout Derby and the surrounding areas, maintaining
                    vehicles of all makes and models with the same attention to
                    detail that has defined us for over four decades.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">40+ Years</h4>
                      <p className="text-gray-400">Of trusted service</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">10,000+</h4>
                      <p className="text-gray-400">Satisfied customers</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">Family Owned</h4>
                      <p className="text-gray-400">Three generations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-400">
                We never compromise on the quality of our work or the parts we
                use
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-400">
                Your satisfaction is our priority, and we go above and beyond to
                achieve it
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-400">
                Continuous training ensures our team stays current with
                automotive technology
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-400">
                Dependable service you can count on, delivered when promised
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">AB</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Andrew Thompson</h3>
                <p className="text-blue-400 mb-3">
                  Founder & Master Technician
                </p>
                <p className="text-gray-400 text-sm">
                  With over 40 years of experience, Andrew founded Shahz tyres
                  and continues to oversee all major repairs and training.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">TB</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tom Bradley</h3>
                <p className="text-blue-400 mb-3">Senior Technician</p>
                <p className="text-gray-400 text-sm">
                  Specializing in engine diagnostics and electrical systems, Tom
                  brings 25 years of expertise to every repair.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">SJ</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-blue-400 mb-3">Service Manager</p>
                <p className="text-gray-400 text-sm">
                  Sarah ensures every customer receives exceptional service and
                  keeps our operations running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience the Shahz tyres Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Shahz tyres with
            their automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Book Service Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
