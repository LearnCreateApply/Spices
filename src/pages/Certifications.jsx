import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileText, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Import Export Code (IEC)',
      description: 'We hold a valid Import Export Code issued by the Directorate General of Foreign Trade (DGFT), Government of India. This registration is mandatory for all export businesses and demonstrates our legal authorization to conduct international trade.',
      details: [
        'Issued by DGFT, Ministry of Commerce',
        'Valid for all export operations',
        'Essential for customs clearance',
        'Enables international transactions'
      ]
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Udyam MSME Registration',
      description: 'Our business is registered under the Udyam MSME (Micro, Small, and Medium Enterprises) scheme by the Ministry of MSME, Government of India. This certification validates our business credentials and demonstrates our commitment to transparent business practices.',
      details: [
        'Government-recognized enterprise',
        'Validates business credentials',
        'Demonstrates operational legitimacy',
        'Supports small business growth'
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Shop Act License',
      description: 'We operate under a valid Shop and Establishment Act license as required by the State Government. This license ensures compliance with local labor laws and business regulations, demonstrating our commitment to lawful and ethical business operations.',
      details: [
        'State Government Authorization',
        'Compliance with labor laws',
        'Regulated business operations',
        'Employee welfare compliance'
      ]
    }
  ];

  const complianceInfo = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Product-Specific Certifications',
      description: 'Depending on your requirements and destination country regulations, we provide necessary product-specific certifications including quality certificates, phytosanitary certificates, and fumigation certificates.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Export Documentation',
      description: 'Complete export documentation including commercial invoice, packing list, certificate of origin, and bill of lading/airway bill is provided with every shipment.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Buyer-Specific Compliance',
      description: 'We work closely with buyers to understand and meet specific regulatory requirements for their destination markets, including obtaining additional certifications or documentation as needed.'
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
              Certifications & Compliance
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Committed to transparency, quality, and regulatory compliance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Certifications Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Business Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain all necessary registrations and licenses to conduct legitimate export business
            </p>
          </motion.div>

          <div className="space-y-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-saffron-100 text-saffron-600 rounded-xl flex items-center justify-center">
                        {cert.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {cert.title}
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {cert.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {cert.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-forest-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Compliance Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Compliance Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Going beyond basic certifications to meet your specific requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-green-100 text-forest-green-600 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-saffron-50 border-l-4 border-saffron-600 rounded-r-xl p-8"
          >
            <div className="flex items-start">
              <FileText className="w-8 h-8 text-saffron-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Important Note
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-semibold">Additional product-specific compliance documentation is provided as per buyer requirements.</span> We understand that different markets and buyers have varying regulatory needs. We work closely with each client to ensure all necessary certifications, test reports, and compliance documents are provided based on their specific destination country requirements and internal standards.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Standards Section */}
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
              Our Commitment to Quality
            </h2>
            <p className="text-xl leading-relaxed text-gray-200 mb-6">
              Every shipment is backed by comprehensive quality assurance processes and documentation. We believe in transparency and provide all necessary paperwork to ensure smooth customs clearance and peace of mind for our buyers.
            </p>
            <p className="text-lg text-gray-300">
              Have specific certification requirements? Contact us to discuss how we can meet your compliance needs.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
