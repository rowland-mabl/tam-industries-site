import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const TAMIndustries = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'WHY TAM INDUSTRIES?', href: '#why' },
    { 
      label: 'SERVICES', 
      dropdown: [
        'Guide successful implementations of mabl',
        'Troubleshoot issues',
        'Advocate internally for the success of your customers'
      ]
    },
    { 
      label: 'SOLUTIONS', 
      dropdown: [
        'QA Strategy',
        'Onboarding Strategy',
        'JavaScript Snippets',
        'mabl Best Practices'
      ]
    },
    { 
      label: 'LEARN', 
      dropdown: [
        'Documentation',
        'Tutorials',
        'Case Studies',
        'Webinars'
      ]
    },
    { label: 'COMPANY', href: '#company' },
    { label: 'BLOG', href: '#blog' }
  ];

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                TAM INDUSTRIES
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1 transition-colors"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.dropdown.map((subItem, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4">
                          {item.dropdown.map((subItem, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Testing Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Partner with TAM Industries to unlock the full potential of your quality assurance strategy with expert mabl implementation and ongoing support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-blue-600">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Implementation</h3>
            <p className="text-gray-600">
              Guide your team through successful mabl implementations with our proven methodologies and best practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-indigo-600 rounded"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
            <p className="text-gray-600">
              Troubleshoot issues quickly and efficiently with dedicated technical assistance and expertise.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-purple-600 rounded"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Advocacy</h3>
            <p className="text-gray-600">
              Champion your success internally with stakeholder engagement and strategic communication.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your QA Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how TAM Industries can transform your testing approach.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">TAM INDUSTRIES</h4>
              <p className="text-gray-400 text-sm">
                Your trusted partner for mabl excellence and quality assurance success.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">SERVICES</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Implementation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Advocacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">SOLUTIONS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">QA Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Onboarding</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 TAM Industries. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TAMIndustries;