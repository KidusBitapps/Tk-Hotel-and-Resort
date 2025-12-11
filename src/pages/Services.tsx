import { motion } from 'motion/react';
import Section from '../components/ui/Section';
import ServiceCard from '../components/ui/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Luxury Accommodation',
      description: 'Our elegantly appointed rooms and suites feature modern amenities, comfortable furnishings, and stunning views. Each accommodation is designed to provide the perfect blend of comfort and luxury for both business and leisure travelers.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'
    },
    {
      title: 'Restaurant & Bar',
      description: 'Experience culinary excellence at our signature restaurant featuring authentic Ethiopian cuisine alongside international favorites. Our bar offers an extensive selection of wines, spirits, and signature cocktails in an elegant atmosphere.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop'
    },
    {
      title: 'Event Hosting',
      description: 'Host your special occasions in our versatile event spaces. From intimate gatherings to grand celebrations, our professional event planning team ensures every detail is perfectly executed for weddings, conferences, and corporate events.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop'
    },
    {
      title: 'Spa & Wellness',
      description: 'Rejuvenate your body and mind at our full-service spa. Our skilled therapists offer a range of treatments including traditional Ethiopian healing practices, modern wellness therapies, and relaxation treatments.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop'
    },
    {
      title: 'Swimming Pool',
      description: 'Take a refreshing dip in our pristine outdoor swimming pool surrounded by lush landscaping. The pool area features comfortable lounging spaces and poolside service for the ultimate relaxation experience.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop'
    },
    {
      title: 'Business Center',
      description: 'Stay productive with our fully equipped business center featuring high-speed internet, printing services, meeting rooms, and conference facilities. Perfect for business travelers and corporate events.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'
    },
    {
      title: 'Concierge Services',
      description: 'Our knowledgeable concierge team is available to assist with tour arrangements, transportation, restaurant reservations, and local recommendations to help you make the most of your stay in Ethiopia.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
    },
    {
      title: 'Airport Transfer',
      description: 'Enjoy convenient and comfortable transportation with our airport transfer service. Our professional drivers ensure a smooth journey to and from the airport in our fleet of well-maintained vehicles.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=600&fit=crop)'
          }}
        />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl"
          >
            Exceptional amenities for an unforgettable experience
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Hospitality Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From luxury accommodation to world-class dining and wellness services, 
              we provide everything you need for a perfect stay.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Additional Services */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Amenities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏋️', title: 'Fitness Center', desc: '24/7 modern gym facilities' },
              { icon: '🚗', title: 'Valet Parking', desc: 'Complimentary parking service' },
              { icon: '📶', title: 'Free WiFi', desc: 'High-speed internet throughout' },
              { icon: '🛎️', title: '24/7 Room Service', desc: 'Round-the-clock dining service' }
            ].map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;