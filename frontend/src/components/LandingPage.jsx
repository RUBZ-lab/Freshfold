import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Star, 
  Truck, 
  Sparkles, 
  Heart,
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const LandingPage = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to book a laundry pickup service with FreshFold Durban. Can you help me?";
    const phoneNumber = "27123456789"; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-500/20 backdrop-blur-sm"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              variants={itemVariants}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                variants={itemVariants}
              >
                Welcome to{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  FreshFold
                </span>{" "}
                Durban
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Your trusted home-based laundry pickup & delivery service.
                <br />
                <span className="text-blue-600 font-semibold">
                  We pick up, wash with care, fold neatly, and deliver fresh — ready to wear.
                </span>
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <button
                  onClick={handleWhatsAppClick}
                  className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Book via WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6" />
                  Call Us Now
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7691101/pexels-photo-7691101.jpeg"
                  alt="Fresh clean laundry"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                  <span className="font-semibold text-gray-800">Fresh & Clean</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-blue-500" />
                  <span className="font-semibold text-gray-800">24-48 Hours</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-20 bg-white/50 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional laundry services with transparent pricing and quality guarantee
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Wash & Fold",
                price: "R30/kg",
                description: "Complete wash, dry, and fold service",
                image: "https://images.pexels.com/photos/4107234/pexels-photo-4107234.jpeg",
                icon: <Sparkles className="w-8 h-8" />
              },
              {
                title: "Ironing",
                price: "R15/item",
                description: "Professional pressing and ironing",
                image: "https://images.unsplash.com/photo-1549037173-e3b717902c57?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxsYXVuZHJ5JTIwc2VydmljZXxlbnwwfHx8fDE3NTE2NTAxNDN8MA&ixlib=rb-4.1.0&q=85",
                icon: <Heart className="w-8 h-8" />
              },
              {
                title: "Bedding & Curtains",
                price: "From R100",
                description: "Specialized care for large items",
                image: "https://images.pexels.com/photos/4440870/pexels-photo-4440870.jpeg",
                icon: <Users className="w-8 h-8" />
              },
              {
                title: "Pickup & Delivery",
                price: "Free over R200",
                description: "Convenient door-to-door service",
                image: "https://images.unsplash.com/photo-1656776832783-c1671a7ad521?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxEdXJiYW4lMjBjaXR5fGVufDB8fHx8MTc1MTY1MDE1Mnww&ixlib=rb-4.1.0&q=85",
                icon: <Truck className="w-8 h-8" />
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-2xl font-bold text-green-400 mb-2">{service.price}</p>
                  <p className="text-sm text-gray-200">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-50 to-green-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 4-step process to get your laundry done professionally
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Book via WhatsApp",
                description: "Send us a message to schedule your pickup",
                icon: <MessageCircle className="w-12 h-12" />
              },
              {
                step: "2",
                title: "We collect from your door",
                description: "Our team picks up your laundry at your convenience",
                icon: <Truck className="w-12 h-12" />
              },
              {
                step: "3",
                title: "We wash, dry & fold with love",
                description: "Professional cleaning with care and attention",
                icon: <Heart className="w-12 h-12" />
              },
              {
                step: "4",
                title: "We deliver fresh in 24–48 hours",
                description: "Your clean laundry returned fresh and ready",
                icon: <CheckCircle className="w-12 h-12" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-800 shadow-md">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Monthly Plans Section */}
      <motion.section 
        className="py-20 bg-white/50 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Monthly <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Plans</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Save time and money with our monthly laundry packages. Great for busy professionals, students, or families.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Student Plan",
                price: "R399",
                period: "/month",
                description: "Perfect for students and single professionals",
                features: [
                  "Up to 10kg per month",
                  "Free pickup & delivery",
                  "24-48 hour turnaround",
                  "WhatsApp booking"
                ],
                popular: false
              },
              {
                title: "Family Plan",
                price: "R699",
                period: "/month",
                description: "Ideal for families and busy households",
                features: [
                  "Up to 20kg per month",
                  "Free pickup & delivery",
                  "Priority processing",
                  "Monthly ironing included",
                  "WhatsApp booking"
                ],
                popular: true
              },
              {
                title: "Premium Plan",
                price: "R999",
                period: "/month",
                description: "For large families and premium service",
                features: [
                  "Up to 35kg per month",
                  "Free pickup & delivery",
                  "Same-day service available",
                  "Monthly ironing included",
                  "Special care items",
                  "WhatsApp booking"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                className={`relative rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-500 to-green-500 text-white transform scale-105' 
                    : 'bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-800'
                }`}
                variants={itemVariants}
                whileHover={{ scale: plan.popular ? 1.05 : 1.08 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-bold text-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-lg opacity-70">{plan.period}</span>
                  </div>
                  <p className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${plan.popular ? 'text-green-200' : 'text-green-500'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={handleWhatsAppClick}
                  className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-white text-blue-600 hover:bg-blue-50' 
                      : 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:shadow-lg'
                  }`}
                >
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Areas We Serve Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Areas We <span className="text-yellow-300">Serve</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We proudly serve the greater Durban area with reliable pickup and delivery service
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Durban Central",
                  "Glenwood",
                  "Morningside",
                  "Overport",
                  "Berea",
                  "Umbilo",
                  "Bluff",
                  "& Surrounds"
                ].map((area, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <MapPin className="w-5 h-5 text-yellow-300" />
                    <span className="font-medium">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1656776832783-c1671a7ad521?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxEdXJiYW4lMjBjaXR5fGVufDB8fHx8MTc1MTY1MDE1Mnww&ixlib=rb-4.1.0&q=85"
                  alt="Durban skyline"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-20 bg-white/50 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Working Professional",
                content: "FreshFold has been a lifesaver! As a busy working mom, I don't have time for laundry. Their service is reliable, professional, and my clothes always come back perfectly clean and folded.",
                rating: 5,
                image: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg"
              },
              {
                name: "David Chen",
                role: "University Student",
                content: "The student plan is perfect for my budget. WhatsApp booking makes it super easy, and the 24-48 hour turnaround is exactly what I need. Highly recommend!",
                rating: 5,
                image: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg"
              },
              {
                name: "Lisa Patel",
                role: "Family of 4",
                content: "We've been using FreshFold for 6 months now. The family plan saves us so much time and money. The quality is outstanding and the service is always punctual.",
                rating: 5,
                image: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience <span className="text-yellow-300">Fresh & Clean</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of satisfied customers who trust FreshFold Durban for their laundry needs
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <button
                onClick={handleWhatsAppClick}
                className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Book Now via WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" />
                Call Us: 031 123 4567
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                FreshFold Durban
              </h3>
              <p className="text-gray-400 mb-4">
                Your trusted laundry partner in Durban. Professional service, affordable prices.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors">
                  <Phone className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Wash & Fold</li>
                <li>Ironing Service</li>
                <li>Bedding & Curtains</li>
                <li>Pickup & Delivery</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Durban Central</li>
                <li>Glenwood</li>
                <li>Morningside</li>
                <li>Berea & Surrounds</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📱 WhatsApp: 073 123 4567</li>
                <li>📞 Phone: 031 123 4567</li>
                <li>📧 hello@freshfolddurban.co.za</li>
                <li>🕒 Mon-Sat: 8AM-6PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FreshFold Durban. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;