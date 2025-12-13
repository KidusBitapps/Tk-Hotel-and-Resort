import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Button from '../components/ui/Button';

interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    address: string;
  };
  preferences: {
    bedType: string;
    specialRequests: string;
    arrivalTime: string;
  };
  payment: {
    method: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardName: string;
  };
}

const Book = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: '',
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      address: ''
    },
    preferences: {
      bedType: '',
      specialRequests: '',
      arrivalTime: ''
    },
    payment: {
      method: 'card',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardName: ''
    }
  });

  const steps = [
    { id: 1, title: 'Select Dates & Guests', icon: '📅' },
    { id: 2, title: 'Choose Your Room', icon: '🏨' },
    { id: 3, title: 'Personal Information', icon: '👤' },
    { id: 4, title: 'Room Preferences', icon: '⚙️' },
    { id: 5, title: 'Payment Details', icon: '💳' },
    { id: 6, title: 'Booking Confirmed', icon: '✅' }
  ];

  const roomTypes = [
    {
      id: 'economy',
      name: 'Economy Room',
      price: 89,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
      size: '25 m²',
      capacity: '1-2 guests',
      features: ['Queen Size Bed', 'City View', 'Free WiFi', 'Air Conditioning', 'Private Bathroom']
    },
    {
      id: 'standard',
      name: 'Standard Room',
      price: 150,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      size: '35 m²',
      capacity: '1-3 guests',
      features: ['King Size Bed', 'Garden View', 'Free WiFi', 'Mini Bar', 'Work Desk', 'Safe']
    },
    {
      id: 'superior',
      name: 'Superior Room',
      price: 200,
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop',
      size: '40 m²',
      capacity: '1-3 guests',
      features: ['King Size Bed', 'Mountain View', 'Premium WiFi', 'Mini Bar', 'Seating Area', 'Coffee Machine']
    },
    {
      id: 'deluxe',
      name: 'Deluxe Suite',
      price: 280,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
      size: '55 m²',
      capacity: '1-4 guests',
      features: ['Separate Living Area', 'Private Balcony', 'Premium Amenities', '24/7 Room Service', 'Kitchenette']
    },
    {
      id: 'executive',
      name: 'Executive Suite',
      price: 380,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
      size: '70 m²',
      capacity: '1-4 guests',
      features: ['Master Bedroom', 'Executive Lounge Access', 'Private Terrace', 'Butler Service', 'Premium Bar']
    },
    {
      id: 'presidential',
      name: 'Presidential Suite',
      price: 650,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
      size: '120 m²',
      capacity: '1-6 guests',
      features: ['2 Bedrooms', 'Panoramic Views', 'Private Chef', 'Spa Access', 'Helicopter Transfer', 'Personal Concierge']
    }
  ];

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const updateBookingData = (field: string, value: any) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updatePersonalInfo = (field: string, value: string) => {
    setBookingData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const updatePreferences = (field: string, value: string) => {
    setBookingData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [field]: value
      }
    }));
  };

  const updatePayment = (field: string, value: string) => {
    setBookingData(prev => ({
      ...prev,
      payment: {
        ...prev.payment,
        [field]: value
      }
    }));
  };

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkIn = new Date(bookingData.checkIn);
      const checkOut = new Date(bookingData.checkOut);
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 1;
  };

  const calculateTotal = () => {
    const room = roomTypes.find(r => r.id === bookingData.roomType);
    const nights = calculateNights();
    const roomTotal = (room?.price || 0) * nights;
    const taxes = roomTotal * 0.15;
    const serviceFee = 25;
    return roomTotal + taxes + serviceFee;
  };

  return (
    <div className="pt-16" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=600&fit=crop)'
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
            Book Your Stay
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Reserve your perfect getaway in just a few steps
          </motion.p>
        </div>
      </section>

      {/* Current Step Indicator */}
      <div className="bg-gradient-to-br from-gray-900 to-black py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <motion.div
              key={currentStep}
              className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))'
              }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.1 }}
            >
              {steps[currentStep - 1]?.icon}
            </motion.div>
            <motion.h3
              key={`title-${currentStep}`}
              className="text-xl md:text-2xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {steps[currentStep - 1]?.title}
            </motion.h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Step {currentStep} of {steps.length}</span>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, var(--color-gold), var(--color-teal))'
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-gradient-to-br from-gray-900 to-black py-16">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {/* Step 1: Dates & Guests */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-theme border border-gold/20"
              >
                <h2 
                  className="text-3xl font-black mb-8"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Select Your Dates
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) => updateBookingData('checkIn', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) => updateBookingData('checkOut', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      Number of Guests
                    </label>
                    <select
                      value={bookingData.guests}
                      onChange={(e) => updateBookingData('guests', parseInt(e.target.value))}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                    >
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Room Selection */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-theme border border-gold/20"
              >
                <h2 
                  className="text-3xl font-black mb-8"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Choose Your Room
                </h2>
                <div className="overflow-x-auto pb-4">
                  <div className="flex space-x-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-x-0" style={{ minWidth: 'max-content' }}>
                    {roomTypes.map((room) => (
                      <motion.div
                        key={room.id}
                        className={`flex-shrink-0 w-72 md:w-auto p-4 lg:p-6 rounded-lg border-2 cursor-pointer transition-all ${
                          bookingData.roomType === room.id
                            ? 'border-gold bg-gold/10'
                            : 'border-gray-600 hover:border-teal/50'
                        }`}
                        onClick={() => updateBookingData('roomType', room.id)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-full h-40 lg:h-48 object-cover rounded-lg mb-4"
                        />
                        <div className="flex justify-between items-start mb-2">
                          <h3 
                            className="text-lg lg:text-xl font-bold"
                            style={{ color: 'var(--color-text-primary)' }}
                          >
                            {room.name}
                          </h3>
                          <div className="text-right">
                            <p 
                              className="text-xl lg:text-2xl font-black"
                              style={{ color: 'var(--color-gold)' }}
                            >
                              ${room.price}
                            </p>
                            <p className="text-xs text-gray-400">per night</p>
                          </div>
                        </div>
                        <div className="flex justify-between text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                          <span>📐 {room.size}</span>
                          <span>👥 {room.capacity}</span>
                        </div>
                        <ul className="space-y-1">
                          {room.features.slice(0, 4).map((feature, index) => (
                            <li 
                              key={index}
                              className="text-xs lg:text-sm flex items-center"
                              style={{ color: 'var(--color-text-secondary)' }}
                            >
                              <span className="text-teal-400 mr-2">✓</span> {feature}
                            </li>
                          ))}
                          {room.features.length > 4 && (
                            <li className="text-xs text-gray-400">+{room.features.length - 4} more amenities</li>
                          )}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Personal Info */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-theme border border-gold/20"
              >
                <h2 
                  className="text-3xl font-black mb-8"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={bookingData.personalInfo.firstName}
                      onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={bookingData.personalInfo.lastName}
                      onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={bookingData.personalInfo.email}
                      onChange={(e) => updatePersonalInfo('email', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={bookingData.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                      placeholder="+251 xxx xxx xxx"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      Country *
                    </label>
                    <select
                      value={bookingData.personalInfo.country}
                      onChange={(e) => updatePersonalInfo('country', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="ET">Ethiopia</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      Address
                    </label>
                    <input
                      type="text"
                      value={bookingData.personalInfo.address}
                      onChange={(e) => updatePersonalInfo('address', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                      placeholder="Street address, City, State"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Preferences */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-theme border border-gold/20"
              >
                <h2 
                  className="text-3xl font-black mb-8"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Room Preferences
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      Bed Type Preference
                    </label>
                    <select
                      value={bookingData.preferences.bedType}
                      onChange={(e) => updatePreferences('bedType', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                    >
                      <option value="">No preference</option>
                      <option value="king">King Size Bed</option>
                      <option value="queen">Queen Size Bed</option>
                      <option value="twin">Twin Beds</option>
                      <option value="double">Double Beds</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      Expected Arrival Time
                    </label>
                    <select
                      value={bookingData.preferences.arrivalTime}
                      onChange={(e) => updatePreferences('arrivalTime', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                    >
                      <option value="">Select arrival time</option>
                      <option value="morning">Morning (6:00 - 12:00)</option>
                      <option value="afternoon">Afternoon (12:00 - 18:00)</option>
                      <option value="evening">Evening (18:00 - 22:00)</option>
                      <option value="late">Late Night (22:00+)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      Special Requests
                    </label>
                    <textarea
                      value={bookingData.preferences.specialRequests}
                      onChange={(e) => updatePreferences('specialRequests', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white resize-none"
                      placeholder="Any special requests: dietary requirements, accessibility needs, celebration arrangements, etc."
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Payment */}
            {currentStep === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 lg:p-8 rounded-lg shadow-theme border border-gold/20"
              >
                <h2 
                  className="text-2xl lg:text-3xl font-black mb-8"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Payment Information
                </h2>
                
                {/* Payment Method Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-gold)' }}>Payment Method</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['card', 'paypal', 'bank'].map((method) => (
                      <motion.div
                        key={method}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          bookingData.payment.method === method
                            ? 'border-gold bg-gold/10'
                            : 'border-gray-600 hover:border-teal/50'
                        }`}
                        onClick={() => updatePayment('method', method)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-3"
                            style={{
                              background: bookingData.payment.method === method 
                                ? 'linear-gradient(135deg, var(--color-gold), var(--color-teal))'
                                : 'rgba(75, 85, 99, 1)'
                            }}
                          >
                            {method === 'card' && '💳'}
                            {method === 'paypal' && '🅿️'}
                            {method === 'bank' && '🏦'}
                          </div>
                          <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                            {method === 'card' && 'Credit/Debit Card'}
                            {method === 'paypal' && 'PayPal'}
                            {method === 'bank' && 'Bank Transfer'}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Card Payment Form */}
                {bookingData.payment.method === 'card' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-8">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        value={bookingData.payment.cardName}
                        onChange={(e) => updatePayment('cardName', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                        placeholder="Name as it appears on card"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        Card Number *
                      </label>
                      <input
                        type="text"
                        value={bookingData.payment.cardNumber}
                        onChange={(e) => updatePayment('cardNumber', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        value={bookingData.payment.expiryDate}
                        onChange={(e) => updatePayment('expiryDate', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        CVV *
                      </label>
                      <input
                        type="text"
                        value={bookingData.payment.cvv}
                        onChange={(e) => updatePayment('cvv', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold text-white"
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                  </div>
                )}

                {/* Booking Summary */}
                <div className="bg-gradient-to-r from-gold/10 to-teal/10 rounded-lg border border-gold/20 p-6">
                  <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-teal)' }}>Booking Summary</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span style={{ color: 'var(--color-text-secondary)' }}>Room:</span>
                        <span style={{ color: 'var(--color-text-primary)' }}>
                          {roomTypes.find(r => r.id === bookingData.roomType)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: 'var(--color-text-secondary)' }}>Dates:</span>
                        <span style={{ color: 'var(--color-text-primary)' }}>
                          {bookingData.checkIn} to {bookingData.checkOut}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: 'var(--color-text-secondary)' }}>Nights:</span>
                        <span style={{ color: 'var(--color-text-primary)' }}>{calculateNights()}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span style={{ color: 'var(--color-text-secondary)' }}>Room Rate:</span>
                        <span style={{ color: 'var(--color-text-primary)' }}>
                          ${(roomTypes.find(r => r.id === bookingData.roomType)?.price || 0) * calculateNights()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: 'var(--color-text-secondary)' }}>Taxes (15%):</span>
                        <span style={{ color: 'var(--color-text-primary)' }}>
                          ${Math.round((roomTypes.find(r => r.id === bookingData.roomType)?.price || 0) * calculateNights() * 0.15)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: 'var(--color-text-secondary)' }}>Service Fee:</span>
                        <span style={{ color: 'var(--color-text-primary)' }}>$25</span>
                      </div>
                      <div className="border-t border-gray-600 pt-2">
                        <div className="flex justify-between text-lg font-bold">
                          <span style={{ color: 'var(--color-text-primary)' }}>Total:</span>
                          <span style={{ color: 'var(--color-gold)' }}>${Math.round(calculateTotal())}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 6: Confirmation */}
            {currentStep === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 lg:p-8 rounded-lg shadow-theme border border-gold/20 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="text-6xl mb-6"
                >
                  ✅
                </motion.div>
                <h2 
                  className="text-3xl font-black mb-4"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-gold), var(--color-teal))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Booking Confirmed!
                </h2>
                <p className="text-lg mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  Thank you for choosing TK Hotel & Resort. Your reservation has been confirmed.
                </p>
                <div className="bg-gradient-to-r from-gold/10 to-teal/10 rounded-lg border border-gold/20 p-6 mb-6">
                  <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Booking Reference</h3>
                  <p className="text-2xl font-black" style={{ color: 'var(--color-gold)' }}>TK-{Date.now().toString().slice(-6)}</p>
                  <p className="text-sm mt-2" style={{ color: 'var(--color-text-secondary)' }}>Please save this reference number for your records</p>
                </div>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  A confirmation email has been sent to {bookingData.personalInfo.email}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={prevStep}
              className={currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}
            >
              ← Previous
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={nextStep}
              className="shine-effect"
            >
              {currentStep === 5 ? 'Process Payment' : currentStep === 6 ? 'New Booking' : 'Next →'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;