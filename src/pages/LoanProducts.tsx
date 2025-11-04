import React from 'react';
import { GraduationCap, User, Gift, Home, Building, Briefcase, Users, Truck, Zap } from 'lucide-react';

const LoanProducts = () => {
  const products = [
    {
      icon: GraduationCap,
      title: "Educational Loan",
      description: "Invest in your future with our comprehensive educational financing solutions for students and parents.",
      features: ["Competitive interest rates", "Flexible repayment terms", "No collateral for amounts up to $50,000", "Moratorium period during studies"],
      interestRate: "6.5% - 8.5%",
      maxAmount: "$200,000"
    },
    {
      icon: User,
      title: "Personal / Salaried Loan",
      description: "Quick and convenient personal loans for salaried individuals to meet immediate financial needs.",
      features: ["Minimal documentation", "Quick approval process", "Flexible tenure options", "Competitive rates for salaried professionals"],
      interestRate: "10.5% - 15.5%",
      maxAmount: "$75,000"
    },
    {
      icon: Gift,
      title: "Occasion Loan",
      description: "Special loans for life's important moments - weddings, festivals, and celebrations.",
      features: ["Fast processing", "Flexible repayment", "Special occasion rates", "No hidden charges"],
      interestRate: "12% - 16%",
      maxAmount: "$25,000"
    },
    {
      icon: Home,
      title: "Rent Advance Loan",
      description: "Bridge the gap with our rent advance loans for security deposits and advance rent payments.",
      features: ["Quick disbursement", "Minimal paperwork", "Flexible tenure", "Competitive rates"],
      interestRate: "11% - 14%",
      maxAmount: "$15,000"
    },
    {
      icon: Building,
      title: "SME Loan",
      description: "Fuel your small and medium enterprise growth with our tailored business financing solutions.",
      features: ["Working capital support", "Equipment financing", "Business expansion loans", "Collateral-free options available"],
      interestRate: "9% - 13%",
      maxAmount: "$500,000"
    },
    {
      icon: Briefcase,
      title: "Business Loan",
      description: "Comprehensive business financing for established enterprises looking to expand and grow.",
      features: ["Large loan amounts", "Competitive rates", "Flexible repayment terms", "Dedicated relationship manager"],
      interestRate: "8.5% - 12%",
      maxAmount: "$2,000,000"
    },
    {
      icon: Users,
      title: "Market Women Loan",
      description: "Empowering women entrepreneurs in markets and small businesses with accessible microfinance.",
      features: ["Group lending model", "Lower interest rates", "Financial literacy training", "Flexible collection schedules"],
      interestRate: "8% - 12%",
      maxAmount: "$10,000"
    },
    {
      icon: Truck,
      title: "Custom Duty Loan",
      description: "Specialized financing for import/export businesses to handle customs and duty payments.",
      features: ["Quick processing for urgent shipments", "Competitive rates", "Trade finance expertise", "Documentary support"],
      interestRate: "9.5% - 13.5%",
      maxAmount: "$1,000,000"
    },
    {
      icon: Zap,
      title: "Smart Loan",
      description: "Intelligent lending solution with AI-powered approval and personalized loan terms.",
      features: ["Instant pre-approval", "Digital application process", "Personalized rates", "24/7 online access"],
      interestRate: "9% - 14%",
      maxAmount: "$100,000"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Loan Products</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Achieve your dreams with our flexible loan solutions designed to meet your personal and business needs
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <product.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-green-600 mb-2">Key Features:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4 space-y-2">
                    <p className="text-sm text-gray-500">Interest Rate: <span className="font-semibold text-green-600">{product.interestRate}</span></p>
                    <p className="text-sm text-gray-500">Max Amount: <span className="font-semibold text-green-600">{product.maxAmount}</span></p>
                  </div>
                  
                  <button className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Loan Calculator</h2>
            <p className="text-lg text-gray-600">
              Calculate your monthly payments and plan your loan effectively
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount ($)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="50,000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="10.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tenure (Years)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="5"
                />
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
                Calculate EMI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply for a Loan?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the next step towards achieving your goals with our competitive loan products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
              Apply Online
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200 font-medium">
              Visit Branch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoanProducts;