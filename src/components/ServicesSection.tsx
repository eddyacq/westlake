import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: "Our Goal",
      description: "To provide innovative financial solutions that empower our clients to achieve their financial aspirations while maintaining the highest standards of service excellence.",
    },
    {
      icon: Users,
      title: "Client Relationship",
      description: "Building lasting partnerships through personalized service, transparent communication, and unwavering commitment to our clients' success and satisfaction.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Delivering superior financial products and services through continuous innovation, rigorous quality control, and adherence to industry best practices.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose West Lake Capital
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to excellence in everything we do, from our innovative products to our exceptional customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;