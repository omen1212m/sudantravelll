import React from 'react';
import { Award, Users, Globe, Heart, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500 ألف+', label: 'راكب سعيد', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'وجهة', icon: <Globe className="w-6 h-6" /> },
    { number: '15+', label: 'سنة خبرة', icon: <Award className="w-6 h-6" /> },
    { number: '98%', label: 'رضا العملاء', icon: <Star className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'التميز',
      description: 'نسعى للتميز في كل جانب من جوانب خدمتنا، من الحجز إلى الهبوط.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'الموثوقية',
      description: 'اعتمد علينا للرحلات في الوقت المحدد والخدمة المتسقة والموثوقة.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'الربط',
      description: 'نربط السودان بالعالم العربي بجداول رحلات مريحة.'
    }
  ];

  const testimonials = [
    {
      name: 'أحمد الراشد',
      location: 'الرياض، المملكة العربية السعودية',
      text: 'خدمة ممتازة ورحلات مريحة. السودان للطيران جعلت رحلات عملي سلسة وممتعة.',
      rating: 5
    },
    {
      name: 'فاطمة حسن',
      location: 'دبي، الإمارات العربية المتحدة',
      text: ' أختار دائماً السودان للطيران لرحلات عائلتي.', 
      rating: 5
    },
    {
      name: 'عمر خليل',
      location: 'القاهرة، مصر',
      text: 'أسعار معقولة دون التنازل عن الجودة. أنصح بها بشدة!',
      rating: 5
    }
  ];

  return (
    <section id="about" className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* About section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              عن السودان للطيران
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              تأسست في عام 2008، السودان للطيران تربط السودان بالعالم برحلات موثوقة 
              ومريحة وبأسعار معقولة. نفتخر بالتزامنا بالتميز والأمان والضيافة السودانية الدافئة 
              التي تجعل كل رحلة لا تُنسى.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              سواء كنت تسافر للعمل أو الترفيه أو لزيارة العائلة، نحن هنا لجعل 
              رحلتك سلسة ومريحة قدر الإمكان.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium">
              اعرف المزيد عنا
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="فريق السودان للطيران"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">15+ سنة</div>
              <div className="text-sm">نخدم السودان</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="text-blue-600 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">قيمنا</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ماذا يقول ركابنا
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;