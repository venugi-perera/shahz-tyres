"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
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
              <Phone className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-blue-400">Contact</span> Us
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to book a service or have questions about your vehicle?
              We're here to help. Contact Shahz tyres today for expert
              automotive advice and service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Visit Our Garage
                    </h3>
                    <p className="text-gray-400">
                      8 Kent St
                      <br />
                      Leicester
                      <br />
                      LE5 3BD
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-400">
                      <a
                        href="tel:01332123456"
                        className="hover:text-blue-400 transition-colors"
                      >
                        07462 163163
                      </a>
                    </p>
                    <p className="text-gray-400">
                      <a
                        href="tel:07123456789"
                        className="hover:text-blue-400 transition-colors"
                      >
                        07462 163163
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-400">
                      <a
                        href="mailto:info@atbmotorengineers.co.uk"
                        className="hover:text-blue-400 transition-colors"
                      >
                        info@atbmotorengineers.co.uk
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Opening Hours
                    </h3>
                    <div className="text-gray-400 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-red-900/20 border border-red-800/50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-red-400">
                  Emergency Breakdown?
                </h3>
                <p className="text-gray-300 mb-3">
                  For emergency breakdown assistance, call our 24/7 emergency
                  line:
                </p>
                <p className="text-xl font-bold text-red-400">
                  <a
                    href="tel:07999123456"
                    className="hover:text-red-300 transition-colors"
                  >
                    07999 123 456
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-800 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const firstName = formData.get("firstName");
                    const lastName = formData.get("lastName");
                    const email = formData.get("email");
                    const phone = formData.get("phone");
                    const service = formData.get("service");
                    const message = formData.get("message");

                    const whatsappMessage = `Hi Shahz tyres,

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Service Required: ${service}

Message: ${message}`;

                    const encodedMessage = encodeURIComponent(whatsappMessage);
                    window.open(
                      `https://wa.me/447123456789?text=${encodedMessage}`,
                      "_blank"
                    );
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium mb-2"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Your first name"
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium mb-2"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Your last name"
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium mb-2"
                    >
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="tyres">Tyres</option>
                      <option value="car-welding">Car Welding</option>
                      <option value="home-welding">Home Welding</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Find Us</h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-lg p-8 text-center">
              <div className="w-full h-64 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-400">
                    Interactive map would be embedded here
                  </p>
                  <p className="text-sm text-gray-500">
                    8 Kent St, Leicester LE5 3BD
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold mb-2">Easy Parking</h3>
                  <p className="text-gray-400 text-sm">
                    Free customer parking available on-site
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Public Transport</h3>
                  <p className="text-gray-400 text-sm">
                    Bus stop 2 minutes walk from our garage
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Central Location</h3>
                  <p className="text-gray-400 text-sm">
                    Conveniently located in Derby city center
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
