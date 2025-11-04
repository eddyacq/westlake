import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Welcome to West Lake Capital
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At West Lake Capital, we are committed to providing exceptional financial services 
              that help our clients achieve their financial goals. With decades of experience in 
              the banking industry, we understand the importance of trust, reliability, and 
              personalized service.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our comprehensive range of deposit and loan products are designed to meet the 
              diverse needs of individuals and businesses. From savings accounts to complex 
              investment solutions, we are your trusted partner in financial success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
                Learn More
              </button>
              <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors duration-200 font-medium">
                Contact Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Financial Services"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-600 to-transparent opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;