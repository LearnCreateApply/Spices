import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Package, Shield } from 'lucide-react';

const Home = () => {
  const products = [
    {
      name: 'Premium Turmeric',
      origin: 'India',
      grade: 'Grade A',
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&auto=format&fit=crop',
      description: 'Vibrant, organic turmeric with high curcumin content'
    },
    {
      name: 'Cumin Seeds',
      origin: 'India',
      grade: 'Premium Quality',
      image: 'https://images.unsplash.com/photo-1596040033229-a0b4c7e55589?w=800&auto=format&fit=crop',
      description: 'Aromatic cumin seeds perfect for culinary excellence'
    }
  ];

  const countries = [
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'United Arab Emirates', flag: '🇦🇪' },
    { name: 'Saudi Arabia', flag: '🇸🇦' },
    { name: 'Kuwait', flag: '🇰🇼' },
    { name: 'Qatar', flag: '🇶🇦' },
    { name: 'Oman', flag: '🇴🇲' }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assured',
      description: 'Rigorous quality checks ensure premium grade exports'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Secure Packaging',
      description: 'Professional packaging maintaining freshness and quality'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Serving markets across UK, UAE, and Middle East'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-green-50 to-saffron-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Indian Exporter of
              <span className="text-saffron-600"> Premium Spices</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Bringing the authentic flavors of India to discerning global markets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-saffron-600 text-white font-semibold rounded-lg hover:bg-saffron-700 transition-colors duration-300 shadow-lg"
              >
                Contact for Export Enquiries
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-forest-green-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 border-2 border-forest-green-700"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-saffron-100 text-saffron-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully sourced and quality-checked spices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-forest-green-100 text-forest-green-700 rounded-full text-sm font-medium">
                      Origin: {product.origin}
                    </span>
                    <span className="px-3 py-1 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium">
                      {product.grade}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-saffron-600 hover:text-saffron-700 font-semibold"
                  >
                    Inquire Now
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-forest-green-700 text-white font-semibold rounded-lg hover:bg-forest-green-800 transition-colors duration-300"
            >
              View All Products
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Countries We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Countries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by businesses across the globe
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-5xl mb-2">{country.flag}</div>
                <p className="text-sm font-medium text-gray-700">{country.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-forest-green-700 to-forest-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Let's discuss how we can meet your spice export requirements
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-saffron-600 text-white font-semibold rounded-lg hover:bg-saffron-700 transition-colors duration-300 shadow-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
