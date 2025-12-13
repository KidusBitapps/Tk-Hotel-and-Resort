import { motion } from 'motion/react';
import { useState } from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=600&fit=crop)'
          }}
        />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black mb-4"
            style={{
              background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Get in touch with us for reservations and inquiries
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <Section className="bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-3xl md:text-4xl font-black mb-8"
                style={{
                  background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mr-4"
                    style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))' }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-lg font-semibold mb-2"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      Phone Numbers
                    </h3>
                    <div className="space-y-1">
                      <a 
                        href="tel:+251114300072" 
                        className="block font-bold hover:text-gold transition-colors"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        +251 114 300 072/73
                      </a>
                      <a 
                        href="tel:+251906421111" 
                        className="block font-bold hover:text-gold transition-colors"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        +251 906 421 111
                      </a>
                      <a 
                        href="tel:+251906511111" 
                        className="block font-bold hover:text-gold transition-colors"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        +251 906 511 111
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mr-4"
                    style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))' }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-lg font-semibold mb-2"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      Location
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      TK Hotel & Resort<br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mr-4"
                    style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))' }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-lg font-semibold mb-2"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      Hours
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      24/7 Reception & Concierge<br />
                      Always here to assist you
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-theme border border-gold/20">
                <h2 
                  className="text-3xl font-black mb-6"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors resize-none text-white"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full shine-effect">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section className="bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 
              className="text-3xl md:text-4xl font-black mb-4"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Find Us
            </h2>
            <p 
              className="text-xl"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Located in the heart of Addis Ababa
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-theme border border-teal/20"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7736.438462715852!2d38.98415334035467!3d8.746483761035378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b73809cc7be59%3A0xec1c0fa0891e0e6c!2sTK%20Hotel%20%26%20Resort!5e0!3m2!1sen!2set!4v1765436957093!5m2!1sen!2set" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="TK Hotel & Resort Location"
            />
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-teal/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl md:text-5xl font-black mb-4"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ready to Experience Luxury?
            </h2>
            <p 
              className="text-xl mb-8"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Book your stay today and discover the finest hospitality in Ethiopia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+251114300072">
                <Button variant="primary" size="xl" className="shine-effect">
                  Call to Book
                </Button>
              </a>
              <a href="tel:+251906421111">
                <Button variant="outline" size="xl">
                  Call +251 906 421 111
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;