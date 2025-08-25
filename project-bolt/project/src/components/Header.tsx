import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50" dir="rtl">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center space-x-1 space-x-reverse">
              <Phone className="w-3 h-3" />
              <span>249-9909556780+</span>
            </div>
            <div className="flex items-center space-x-1 space-x-reverse">
              <Mail className="w-3 h-3" />
              <span>autosite858@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 space-x-reverse">
            <MapPin className="w-3 h-3" />
            <span>السودان - بورتسودان</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">سط</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">السودان للطيران</h1>
              <p className="text-sm text-gray-600">بوابتك إلى العالم </p>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">الرئيسية</a>
            <a href="#destinations" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">الوجهات</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">من نحن</a>
            <a href="https://wa.me/249909556780" target="_blank" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">اتصل بنا</a>
            <button href="https://wa.me/249909556780" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium">
              احجز الآن
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 font-medium">الرئيسية</a>
              <a href="#destinations" className="block text-gray-700 hover:text-blue-600 font-medium">الوجهات</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 font-medium">من نحن</a>
              <a href="https://wa.me/249909556780" target="_blank" className="block text-gray-700 hover:text-blue-600 font-medium">اتصل بنا</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium">
                احجز الآن
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;