import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md shadow-sm z-50 border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl tracking-tight" style={{ fontWeight: 600 }}>
              <span className="text-[#0f172a]">JMPay</span>
              <span className="text-[#1e40af]">Solutions</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 text-[#475569] hover:text-[#0f172a] transition-colors">
              Home
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-[#475569] hover:text-[#0f172a] transition-colors flex items-center gap-1">
                Products
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link to="/payment-gateway" className="block px-4 py-3 text-[#475569] hover:bg-slate-50 hover:text-[#1e40af] rounded-md transition-colors">
                    Payment Gateway
                  </Link>
                  <a href="/#bbps" className="block px-4 py-3 text-[#475569] hover:bg-slate-50 hover:text-[#1e40af] rounded-md transition-colors">
                    BBPS
                  </a>
                  <a href="/#grc" className="block px-4 py-3 text-[#475569] hover:bg-slate-50 hover:text-[#1e40af] rounded-md transition-colors">
                    GRC (eGRC)
                  </a>
                  <a href="/#lms" className="block px-4 py-3 text-[#475569] hover:bg-slate-50 hover:text-[#1e40af] rounded-md transition-colors">
                    LMS
                  </a>
                  <a href="/#visitor-management" className="block px-4 py-3 text-[#475569] hover:bg-slate-50 hover:text-[#1e40af] rounded-md transition-colors">
                    Visitor Management
                  </a>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-[#475569] hover:text-[#0f172a] transition-colors flex items-center gap-1">
                Services
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a href="/#web-dev" className="block px-4 py-3 text-[#475569] hover:bg-slate-50 hover:text-[#1e40af] rounded-md transition-colors">
                    Website Development
                  </a>
                  <a href="/#mobile-dev" className="block px-4 py-3 text-[#475569] hover:bg-slate-50 hover:text-[#1e40af] rounded-md transition-colors">
                    Mobile App Development
                  </a>
                  <a href="/#custom-software" className="block px-4 py-3 text-[#475569] hover:bg-slate-50 hover:text-[#1e40af] rounded-md transition-colors">
                    Custom Software
                  </a>
                  <a href="/#cloud-services" className="block px-4 py-3 text-[#475569] hover:bg-slate-50 hover:text-[#1e40af] rounded-md transition-colors">
                    Cloud & AWS Services
                  </a>
                </div>
              </div>
            </div>

            <a href="/#about" className="px-4 py-2 text-[#475569] hover:text-[#0f172a] transition-colors">
              About
            </a>
            <a href="/#contact" className="px-4 py-2 text-[#475569] hover:text-[#0f172a] transition-colors">
              Contact
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button className="px-5 py-2.5 text-[#1e40af] border border-[#1e40af] rounded-lg hover:bg-[#1e40af] hover:text-white transition-all">
              Request Demo
            </button>
            <button className="px-5 py-2.5 bg-[#1e40af] text-white rounded-lg hover:bg-[#1e3a8a] transition-colors shadow-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-slate-100">
            <Link to="/" className="block px-4 py-2 text-[#475569] hover:text-[#0f172a] transition-colors">
              Home
            </Link>
            
            <div>
              <button 
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-[#475569] hover:text-[#0f172a] transition-colors"
              >
                Products
                <ChevronDown size={16} className={productsOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {productsOpen && (
                <div className="pl-8 space-y-2 mt-2">
                  <Link to="/payment-gateway" className="block px-4 py-2 text-sm text-[#64748b] hover:text-[#1e40af]">Payment Gateway</Link>
                  <a href="/#bbps" className="block px-4 py-2 text-sm text-[#64748b] hover:text-[#1e40af]">BBPS</a>
                  <a href="/#grc" className="block px-4 py-2 text-sm text-[#64748b] hover:text-[#1e40af]">GRC (eGRC)</a>
                  <a href="/#lms" className="block px-4 py-2 text-sm text-[#64748b] hover:text-[#1e40af]">LMS</a>
                  <a href="/#visitor-management" className="block px-4 py-2 text-sm text-[#64748b] hover:text-[#1e40af]">Visitor Management</a>
                </div>
              )}
            </div>

            <div>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-[#475569] hover:text-[#0f172a] transition-colors"
              >
                Services
                <ChevronDown size={16} className={servicesOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {servicesOpen && (
                <div className="pl-8 space-y-2 mt-2">
                  <a href="/#web-dev" className="block px-4 py-2 text-sm text-[#64748b] hover:text-[#1e40af]">Website Development</a>
                  <a href="/#mobile-dev" className="block px-4 py-2 text-sm text-[#64748b] hover:text-[#1e40af]">Mobile App Development</a>
                  <a href="/#custom-software" className="block px-4 py-2 text-sm text-[#64748b] hover:text-[#1e40af]">Custom Software</a>
                  <a href="/#cloud-services" className="block px-4 py-2 text-sm text-[#64748b] hover:text-[#1e40af]">Cloud & AWS Services</a>
                </div>
              )}
            </div>

            <a href="/#about" className="block px-4 py-2 text-[#475569] hover:text-[#0f172a] transition-colors">
              About
            </a>
            <a href="/#contact" className="block px-4 py-2 text-[#475569] hover:text-[#0f172a] transition-colors">
              Contact
            </a>
            
            <div className="pt-4 px-4 space-y-3">
              <button className="w-full px-5 py-2.5 text-[#1e40af] border border-[#1e40af] rounded-lg hover:bg-[#1e40af] hover:text-white transition-all">
                Request Demo
              </button>
              <button className="w-full px-5 py-2.5 bg-[#1e40af] text-white rounded-lg hover:bg-[#1e3a8a] transition-colors shadow-sm">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}