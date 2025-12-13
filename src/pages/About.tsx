import { motion } from 'motion/react';
import Section from '../components/ui/Section';

const About = () => {
  return (
    <div className="pt-16" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&h=600&fit=crop)'
          }}
        />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black"
            style={{
              background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About TK Hotel & Resort
          </motion.h1>
        </div>
      </section>

      {/* Our Story */}
      <Section className="bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-4xl md:text-5xl font-black mb-6"
                style={{
                  background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Our Story
              </h2>
              <p 
                className="text-lg mb-6"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                TK Hotel & Resort was founded with a vision to create an exceptional hospitality 
                experience that celebrates the rich culture and natural beauty of Ethiopia. Since 
                our establishment, we have been committed to providing our guests with unparalleled 
                luxury, comfort, and authentic Ethiopian hospitality.
              </p>
              <p 
                className="text-lg"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Our journey began with a simple belief: that every guest deserves to experience 
                the warmth and beauty of Ethiopian culture while enjoying world-class amenities 
                and services. Today, we continue to uphold this tradition of excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-theme cursor-glow border border-gold/20"
            >
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop"
                alt="Hotel exterior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Mission & Values */}
      <Section className="bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl font-black mb-6"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Our Mission & Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))' }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Excellence
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                We strive for excellence in every aspect of our service, ensuring each guest 
                receives the highest quality experience.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))' }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Hospitality
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Our warm Ethiopian hospitality creates a welcoming atmosphere where every 
                guest feels at home.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))' }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Sustainability
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                We are committed to sustainable practices that preserve Ethiopia's natural 
                beauty for future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* What Makes Us Unique */}
      <Section className="bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-theme cursor-glow border border-teal/20"
            >
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop"
                alt="Hotel interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-4xl md:text-5xl font-black mb-6"
                style={{
                  background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                What Makes Us Unique
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div 
                    className="w-6 h-6 rounded-full flex-shrink-0 mt-1 mr-4"
                    style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))' }}
                  ></div>
                  <div>
                    <h4 
                      className="font-semibold"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      Authentic Ethiopian Experience
                    </h4>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      Immerse yourself in genuine Ethiopian culture and traditions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div 
                    className="w-6 h-6 rounded-full flex-shrink-0 mt-1 mr-4"
                    style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))' }}
                  ></div>
                  <div>
                    <h4 
                      className="font-semibold"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      Personalized Service
                    </h4>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      Our dedicated staff ensures every detail of your stay is perfect.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div 
                    className="w-6 h-6 rounded-full flex-shrink-0 mt-1 mr-4"
                    style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))' }}
                  ></div>
                  <div>
                    <h4 
                      className="font-semibold"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      Prime Location
                    </h4>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      Strategically located to offer easy access to local attractions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div 
                    className="w-6 h-6 rounded-full flex-shrink-0 mt-1 mr-4"
                    style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))' }}
                  ></div>
                  <div>
                    <h4 
                      className="font-semibold"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      Modern Amenities
                    </h4>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      Contemporary facilities combined with traditional Ethiopian charm.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;