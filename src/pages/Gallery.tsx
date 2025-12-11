import { motion } from 'motion/react';
import { useState } from 'react';
import Section from '../components/ui/Section';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop', alt: 'Luxury Suite', category: 'Rooms' },
    { id: 2, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop', alt: 'Restaurant Dining', category: 'Dining' },
    { id: 3, src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop', alt: 'Spa Treatment', category: 'Spa' },
    { id: 4, src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop', alt: 'Swimming Pool', category: 'Facilities' },
    { id: 5, src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop', alt: 'Hotel Exterior', category: 'Exterior' },
    { id: 6, src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop', alt: 'Lobby Area', category: 'Interior' },
    { id: 7, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop', alt: 'Event Hall', category: 'Events' },
    { id: 8, src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop', alt: 'Concierge Service', category: 'Services' },
    { id: 9, src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop', alt: 'Garden View', category: 'Exterior' },
    { id: 10, src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop', alt: 'Executive Room', category: 'Rooms' },
    { id: 11, src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', alt: 'Business Center', category: 'Facilities' },
    { id: 12, src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop', alt: 'Hotel Transport', category: 'Services' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=600&fit=crop)'
          }}
        />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl"
          >
            Discover the beauty and elegance of TK Hotel & Resort
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Beautiful Spaces</h2>
            <p className="text-xl text-gray-600">
              Take a visual journey through our luxurious facilities and amenities
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.backgroundColor = '#f3f4f6';
                    }}
                    onLoad={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <p className="font-semibold">{image.alt}</p>
                      <p className="text-sm text-gray-200">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Categories */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Rooms', 'Dining', 'Facilities', 'Services'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
                <p className="text-gray-600">
                  {galleryImages.filter(img => img.category === category).length} photos
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Gallery;