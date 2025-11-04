import React, { useState } from 'react';
import { Menu, X, Building2, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar = ({ currentPage, setCurrentPage }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: 'Home', href: '#home', page: 'home' },
    { name: 'About Us', href: '#about', page: 'about' },
    { 
      name: 'Deposit Product', 
      href: '#deposit',
      page: 'deposit',
      dropdown: [
        'Investments',
        'Fixed Deposit',
        'Daily Susu Savings',
        'Kiddie Save Account',
        'Edusave Account',
        'Savings Plus Account',
        'Super Save Account',
        'Cheque Save Account'
      ]
    },
    { 
      name: 'Loan Product', 
      href: '#loan',
      page: 'loan',
      dropdown: [
        'Educational Loan',
        'Personal / Salaried Loan',
        'Occassion Loan',
        'Rent Advance Loan',
        'SME Loan',
        'Business Loan',
        'Market Women Loan',
        'Custom Duty Loan',
        'Smart Loan'
      ]
    },
    { name: 'News and Gallery', href: '#news', page: 'news' },
    { name: 'Contact Us', href: '#contact', page: 'contact' },
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleMouseEnter = (itemName: string) => {
    if (navItems.find(item => item.name === itemName)?.dropdown) {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-green-600">West Lake Capital</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.page) {
                      setCurrentPage(item.page);
                    }
                  }}
                  className={`flex items-center transition-colors duration-200 font-medium py-2 ${
                    currentPage === item.page ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    {item.dropdown.map((dropdownItem, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:bg-green-50 transition-colors duration-200 text-sm font-medium"
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.page) {
                          setCurrentPage(item.page);
                        }
                        setIsMenuOpen(false);
                      }}
                      className={`block px-3 py-2 transition-colors duration-200 font-medium flex-1 ${
                        currentPage === item.page ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                      }`}
                    >
                      {item.name}
                    </a>
                    {item.dropdown && (
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;