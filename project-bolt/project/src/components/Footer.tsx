import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" dir="rtl">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">سط</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">السودان للطيران</h3>
                <p className="text-sm text-gray-300">بوابتك إلى العالم العربي</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              نربط السودان بالعالم  برحلات مريحة وخدمة استثنائية 
              وأسعار تنافسية منذ عام 2008.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://wa.me/249909556780" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/share/1As1NDC458/?mibextid=wwXlfr" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/auto_site.sd?igsh=MWwxMDB5d2E0d3R6cg==" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@auto_site?is_from_webapp=1&sender_device=pc" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://autositesd.netlify.app" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#destinations" className="text-gray-300 hover:text-white transition-colors">الوجهات</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              <li><a className="text-gray-300 hover:text-white transition-colors">حجز الرحلات</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors">السفر الجماعي</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors">خدمات الشحن</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors">تأمين السفر</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors">نقل المطار</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors">دعم العملاء</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">اتصل بنا</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">شارع العمارات</p>
                  <p className="text-gray-300">بورتسودان، السودان</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-blue-400" />
                <p className="text-gray-300" dir="ltr">+249 909 556 780</p>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-gray-300">autosite858@gmail.com</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-3">ساعات العمل</h5>
              <p className="text-gray-300 text-sm">السبت - الخميس: 8:00 ص - 6:00 م</p>
              <p className="text-gray-300 text-sm">الجمعة: 9:00 ص - 4:00 م</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 السودان للطيران. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <a className="text-gray-400 hover:text-white transition-colors">سياسة الخصوصية</a>
              <a className="text-gray-400 hover:text-white transition-colors">شروط الخدمة</a>
            </div> 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;