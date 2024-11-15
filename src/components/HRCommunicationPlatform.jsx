import React, { useState } from 'react';
import { 
  MessageCircle, 
  Download, 
  Users, 
  BarChart, 
  Lock, 
  Globe,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { HRCommunicationPlatform } from '.';

const MainContent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Instant HR access via mobile and web apps with real-time messaging capabilities",
      stats: "90% faster response time"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Comprehensive tools for managing personnel and departments efficiently",
      stats: "50% reduced admin time"
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Data-driven insights for better decision making and resource allocation",
      stats: "35% improved efficiency"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Multi-language support with localized content and regional compliance",
      stats: "100+ countries supported"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">HR</span>
              </div>
              <span className="text-xl font-bold text-gray-800 hidden sm:block">
                HR Communication Platform
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><a href="#features" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">Features</a></li>
                <li><a href="#pricing" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">Pricing</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">About</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">Contact</a></li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4">
              <ul className="space-y-4">
                <li><a href="#features" className="block text-gray-600 hover:text-blue-500 transition-colors">Features</a></li>
                <li><a href="#pricing" className="block text-gray-600 hover:text-blue-500 transition-colors">Pricing</a></li>
                <li><a href="#about" className="block text-gray-600 hover:text-blue-500 transition-colors">About</a></li>
                <li><a href="#contact" className="block text-gray-600 hover:text-blue-500 transition-colors">Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Streamline Your HR Communications
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                A comprehensive platform designed to enhance workplace communication and streamline HR processes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#features" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Explore Features
                </a>
                <a 
                  href="#demo" 
                  className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors border-2 border-blue-400"
                >
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-4 rounded-full ${activeFeature === index ? 'bg-blue-500' : 'bg-blue-100'} transition-colors duration-300`}>
                      <feature.icon className={`w-8 h-8 ${activeFeature === index ? 'text-white' : 'text-blue-500'}`} />
                    </div>
                    <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="mt-auto">
                      <span className="text-blue-500 font-semibold">{feature.stats}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <div className="relative">
                    <img 
                      src="/api/placeholder/400/600" 
                      alt="Mobile App Interface" 
                      className="rounded-2xl shadow-xl"
                    />
                    <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      New Features
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">Mobile Experience</h2>
                  <p className="text-gray-600 text-lg mb-8">
                    Access your HR platform anywhere, anytime. Our mobile app provides seamless integration with all platform features.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      'Real-time notifications',
                      'Secure document access',
                      'Quick response actions',
                      'Offline capabilities'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download the App
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Strategy Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Implementation Strategy</h2>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-blue-800">Initial Launch Phase</h3>
                    <div className="space-y-4">
                      {[
                        'Beta testing with 3 franchise locations',
                        'Focus on core communication features',
                        'Train key management personnel',
                        'Gather initial user feedback'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mt-1 mr-3">
                            <span className="text-blue-800 font-bold text-sm">{index + 1}</span>
                          </div>
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-blue-800">Expansion Phase</h3>
                    <div className="space-y-4">
                      {[
                        'Add advanced analytics',
                        'Implement machine learning for case routing',
                        'Expand language options',
                        'Add compliance monitoring tools'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mt-1 mr-3">
                            <span className="text-blue-800 font-bold text-sm">{index + 5}</span>
                          </div>
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-400">
                Leading HR communication platform helping organizations streamline their processes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">support@hrplatform.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 HR Communication Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainContent;