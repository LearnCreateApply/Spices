import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Package, MapPin, Award, ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Premium Turmeric Powder',
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&auto=format&fit=crop',
      origin: 'India',
      grade: 'Grade A - Premium Quality',
      packaging: '25kg PP Bags',
      description: 'Our premium turmeric powder is sourced from the finest turmeric roots grown in select regions of India. Known for its vibrant golden-yellow color and high curcumin content, this turmeric is perfect for culinary applications, food manufacturing, and export markets. Each batch is carefully processed to retain its natural properties and aroma.',
      specifications: [
        'Curcumin Content: 3-5%',
        'Moisture: Max 10%',
        'Total Ash: Max 9%',
        'Color: Rich Golden Yellow'
      ]
    },
    {
      name: 'Premium Cumin Seeds',
      image: 'https://images.unsplash.com/photo-1596040033229-a0b4c7e55589?w=800&auto=format&fit=crop',
      origin: 'India',
      grade: 'Premium Quality - Machine Cleaned',
      packaging: '25kg PP Bags',
      description: 'Aromatic cumin seeds sourced from premium growing regions, known for their distinctive warm flavor and earthy aroma. Our cumin seeds are meticulously cleaned and sorted to ensure uniform quality. Ideal for spice blends, food processing, and direct culinary use in international markets.',
      specifications: [
        'Purity: 99% Min',
        'Moisture: Max 8%',
        'Admixture: Max 1%',
        'Volatile Oil Content: 2.5-4.5%'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-green-50 to-saffron-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Premium Products
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Quality-checked Indian spices for discerning global markets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className={`relative h-96 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {product.name}
                    </h2>
                    
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-saffron-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Origin</p>
                          <p className="text-sm text-gray-600">{product.origin}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Award className="w-5 h-5 text-saffron-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Grade</p>
                          <p className="text-sm text-gray-600">{product.grade}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Package className="w-5 h-5 text-saffron-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Packaging</p>
                          <p className="text-sm text-gray-600">{product.packaging}</p>
                        </div>
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Specifications
                      </h3>
                      <ul className="space-y-2">
                        {product.specifications.map((spec, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-saffron-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-saffron-600 text-white font-semibold rounded-lg hover:bg-saffron-700 transition-colors duration-300 shadow-md w-full sm:w-auto"
                    >
                      Inquire Now
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Custom Packaging & Bulk Orders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Flexible Packaging Options
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  While our standard packaging is 25kg PP bags, we understand that different markets have different requirements. We can accommodate custom packaging specifications to meet your specific needs, including different bag sizes, materials, and labeling requirements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Minimum Order Quantities
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our minimum order quantities are designed to be practical for international shipping while maintaining competitive pricing. Contact us to discuss your specific requirements, and we'll work with you to find the best solution for your business.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-forest-green-700 text-white font-semibold rounded-lg hover:bg-forest-green-800 transition-colors duration-300"
              >
                Discuss Your Requirements
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-forest-green-700 to-forest-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quality You Can Trust
            </h2>
            <p className="text-xl leading-relaxed text-gray-200 mb-8">
              Every product undergoes rigorous quality checks to ensure it meets international standards. We provide complete documentation including quality certificates, phytosanitary certificates, and certificates of origin with every shipment.
            </p>
            <p className="text-lg text-gray-300">
              <span className="font-semibold">Note:</span> Prices are provided on request based on quantity, packaging requirements, and destination. Additional product-specific compliance documentation is provided as per buyer requirements.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
