import React, { useState } from 'react';
import { MapPin, Clock, Plane, X } from 'lucide-react';

const Destinations = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const destinations = [
    {
      country: 'المملكة العربية السعودية',
      flag: '🇸🇦',
      image: 'https://hub.wtm.com/wp-content/uploads/2020/11/SAUDI-1-760x475@2x.jpg',
      description: 'أرض الحرمين الشريفين والتراث الإسلامي العريق.',
      cities: [
        { name: 'الرياض', code: 'RUH', price: '168,000 ج.س', duration: '2 ساعة 15 دقيقة' },
        { name: 'جدة', code: 'JED', price: '175,000 ج.س', duration: '2 ساعة 30 دقيقة' },
        { name: 'الدمام', code: 'DMM', price: '165,000 ج.س', duration: '2 ساعة 10 دقيقة' }
      ]
    },
    {
      country: 'مصر',
      flag: '🇪🇬',
      image: 'https://explore-live.s3.eu-west-1.amazonaws.com/medialibraries/explore/explore-media/destinations/middle%20east/egypt/egypt-header.jpg?ext=.jpg&width=1920&format=webp&quality=80&v=201704211554%201920w',
      description: 'أم الدنيا موطن الأهرامات والحضارة الفرعونية.',
      cities: [
        { name: 'القاهرة', code: 'CAI', price: '108,000 ج.س', duration: '1 ساعة 45 دقيقة' },
        { name: 'الإسكندرية', code: 'ALY', price: '115,000 ج.س', duration: '1 ساعة 50 دقيقة' },
        { name: 'الأقصر', code: 'LXR', price: '120,000 ج.س', duration: '1 ساعة 30 دقيقة' }
      ]
    },
    {
      country: 'الإمارات العربية المتحدة',
      flag: '🇦🇪',
      image: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/7396/production/_131009592_gettyimages-1355640320.jpg',
      description: 'مركز عالمي للأعمال والتسوق الفاخر والعمارة الحديثة.',
      cities: [
        { name: 'دبي', code: 'DXB', price: '204,000 ج.س', duration: '3 ساعات 30 دقيقة' },
        { name: 'أبوظبي', code: 'AUH', price: '198,000 ج.س', duration: '3 ساعات 25 دقيقة' },
        { name: 'الشارقة', code: 'SHJ', price: '195,000 ج.س', duration: '3 ساعات 20 دقيقة' }
      ]
    },
    {
      country: 'البحرين',
      flag: '🇧🇭',
      image: 'https://media.istockphoto.com/id/623140056/video/aerial-view-of-manama-city-bahrain.jpg?s=640x640&k=20&c=kFuhoNaJihCZhPFnIBYmI4PfGod25lVHo_XhdVLbw3k=',
      description: 'لؤلؤة الخليج بتاريخها العريق وحداثتها المتميزة.',
      cities: [
        { name: 'المنامة', code: 'BAH', price: '185,000 ج.س', duration: '3 ساعات' },
        { name: 'المحرق', code: 'BAH', price: '185,000 ج.س', duration: '3 ساعات' },
        { name: 'الرفاع', code: 'BAH', price: '185,000 ج.س', duration: '3 ساعات' }
      ]
    },
    {
      country: 'عُمان',
      flag: '🇴🇲',
      image: 'https://assets.hrewards.com/assets/jpg.xxlarge_Adobe_Stock_197282114_Muttrah_Corniche_Muscat_Oman_6ef36ef457.jpg?optimize',
      description: 'سلطنة الجمال الطبيعي والتراث العماني الأصيل.',
      cities: [
        { name: 'مسقط', code: 'MCT', price: '220,000 ج.س', duration: '4 ساعات' },
        { name: 'صلالة', code: 'SLL', price: '235,000 ج.س', duration: '4 ساعات 15 دقيقة' },
        { name: 'نزوى', code: 'MCT', price: '225,000 ج.س', duration: '4 ساعات 5 دقائق' }
      ]
    },
    {
      country: 'أوغندا',
      flag: '🇺🇬',
      image: 'https://destinationuganda.com/wp-content/uploads/2020/10/kampala-road.jpg',
      description: 'لؤلؤة أفريقيا بطبيعتها الخلابة وثقافتها المتنوعة.',
      cities: [
        { name: 'كمبالا', code: 'EBB', price: '280,000 ج.س', duration: '2 ساعة 45 دقيقة' },
        { name: 'عنتيبي', code: 'EBB', price: '280,000 ج.س', duration: '2 ساعة 45 دقيقة' },
        { name: 'جينجا', code: 'EBB', price: '285,000 ج.س', duration: '2 ساعة 50 دقيقة' }
      ]
    }
  ];

  const handleCitySelect = (country, city) => {
    const message = `مرحباً، أريد حجز رحلة إلى ${city.name} (${city.code}) في ${country.country}.

تفاصيل الرحلة المطلوبة:
🌍 الوجهة: ${city.name}, ${country.country}
💰 السعر المبدئي: ${city.price}
⏱️ مدة الرحلة: ${city.duration}

يرجى إرسال:
- الرحلات المتاحة
- الأسعار التفصيلية بالجنيه السوداني
- مواعيد الإقلاع والوصول
- خيارات الحجز المتاحة

شكراً لكم.`;
    
    const whatsappUrl = `https://wa.me/249909556780?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSelectedCountry(null);
  };

  return (
    <section id="destinations" className="py-20 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            الوجهات الشائعة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف وجهات مذهلة برحلات مريحة وأسعار تنافسية. 
            استكشف الثقافة الغنية والتاريخ والعجائب الحديثة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
              <div className="relative overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.country}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-2 rounded-full text-2xl">
                  {dest.flag}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {dest.country}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed flex-1">
                  {dest.description}
                </p>
                
                <button 
                  onClick={() => setSelectedCountry(dest)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium mt-auto"
                >
                  اختر المدينة
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* City Selection Popup */}
      {selectedCountry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <span className="ml-3 text-3xl">{selectedCountry.flag}</span>
                {selectedCountry.country}
              </h3>
              <button
                onClick={() => setSelectedCountry(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6 text-center">
                اختر المدينة التي تريد السفر إليها
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {selectedCountry.cities.map((city, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{city.name}</h4>
                        <p className="text-gray-600 text-sm">({city.code})</p>
                      </div>
                      <div className="text-left">
                        <div className="text-xl font-bold text-blue-600">{city.price}</div>
                        <div className="text-sm text-gray-600">ابتداءً من</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 ml-2" />
                        <span>{city.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Plane className="w-4 h-4 ml-2" />
                        <span>رحلات يومية</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleCitySelect(selectedCountry, city)}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium"
                    >
                      احجز رحلة إلى {city.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Destinations;