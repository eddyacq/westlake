import React from 'react';
import { PiggyBank, TrendingUp, Shield, Clock, Users, GraduationCap, Baby, CreditCard } from 'lucide-react';

const DepositProducts = () => {
  const products = [
    {
      icon: TrendingUp,
      title: "Investments",
      description: "Grow your wealth with our diverse investment portfolio options designed for long-term financial growth.",
      features: ["Professional portfolio management", "Diversified investment options", "Regular performance reports", "Risk assessment guidance"],
      minAmount: "$5,000"
    },
    {
      icon: Clock,
      title: "Fixed Deposit",
      description: "Secure your savings with guaranteed returns through our competitive fixed deposit rates.",
      features: ["Guaranteed interest rates", "Flexible tenure options", "Auto-renewal facility", "Loan against deposit"],
      minAmount: "$1,000"
    },
    {
      icon: PiggyBank,
      title: "Daily Susu Savings",
      description: "Traditional savings method with modern convenience - save small amounts daily for big results.",
      features: ["Daily collection service", "Flexible saving amounts", "Community-based approach", "Regular payout options"],
      minAmount: "$5/day"
    },
    {
      icon: Baby,
      title: "Kiddie Save Account",
      description: "Start your child's financial journey early with our specially designed children's savings account.",
      features: ["No minimum balance", "Educational financial tools", "Parental controls", "Birthday bonuses"],
      minAmount: "$25"
    },
    {
      icon: GraduationCap,
      title: "Edusave Account",
      description: "Plan and save for educational expenses with our education-focused savings account.",
      features: ["Higher interest rates", "Education loan benefits", "Scholarship opportunities", "Fee payment convenience"],
      minAmount: "$100"
    },
    {
      icon: TrendingUp,
      title: "Savings Plus Account",
      description: "Enhanced savings account with premium benefits and higher interest rates for serious savers.",
      features: ["Tiered interest rates", "Premium banking services", "Free transactions", "Investment advisory"],
      minAmount: "$2,500"
    },
    {
      icon: Shield,
      title: "Super Save Account",
      description: "Maximum security and growth for your savings with our flagship savings product.",
      features: ["Highest interest rates", "Insurance coverage", "Priority customer service", "Wealth management access"],
      minAmount: "$10,000"
    },
    {
      icon: CreditCard,
      title: "Cheque Save Account",
      description: "Traditional savings with modern cheque facilities for convenient transactions.",
      features: ["Free cheque book", "Online banking", "ATM access", "Mobile banking"],
      minAmount: "$500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Deposit Products</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Secure your financial future with our comprehensive range of deposit products designed to meet your savings goals
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
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">Minimum Amount: <span className="font-semibold text-green-600">{product.minAmount}</span></p>
                  </div>
                  
                  <button className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the deposit product that best fits your financial goals and start building your wealth today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
              Open Account
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200 font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepositProducts;