import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Transparency',
      description: 'We believe in honest communication and clear business practices with all our partners'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Excellence',
      description: 'Every batch undergoes rigorous quality checks to ensure premium grade exports'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Focus',
      description: 'Your satisfaction and trust are at the heart of everything we do'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Standards',
      description: 'Adhering to international quality and compliance requirements'
    }
  ];

  const milestones = [
    {
      year: 'Founded',
      title: 'Established in Navi Mumbai',
      description: 'Started with a vision to bring authentic Indian spices to global markets'
    },
    {
      year: 'Growth',
      title: 'Expanded Export Network',
      description: 'Successfully serving UK, UAE, and Middle Eastern markets'
    },
    {
      year: 'Today',
      title: 'Trusted Partner',
      description: 'Recognized for quality, reliability, and transparent business practices'
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
              About Our Company
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A trusted merchant exporter committed to quality and transparency
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  We are a <span className="font-semibold text-forest-green-700">merchant exporter based in Navi Mumbai</span>, specializing in sourcing and exporting premium Indian spices to international markets. Our foundation is built on transparency, quality assurance, and genuine partnerships with our clients.
                </p>
                <p>
                  As a merchant exporter, we carefully source our spices from trusted suppliers across India, ensuring each product meets stringent quality standards before it reaches your business. We understand that quality and consistency are paramount in the global spice trade, and we take pride in delivering exactly that.
                </p>
                <p>
                  Our approach is simple and honest: we focus on <span className="font-semibold text-saffron-600">quality-checked sourcing</span>, transparent communication, and reliable service. We believe in building long-term relationships based on trust and mutual benefit.
                </p>
                <p>
                  Every shipment that leaves our facility is backed by proper documentation, quality certificates, and our commitment to your satisfaction. We work closely with our clients to understand their specific requirements and ensure compliance with their local regulations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a0b4c7e55589?w=800&auto=format&fit=crop"
                  alt="Indian Spices"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our business and relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-saffron-100 text-saffron-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
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
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building trust and quality partnerships step by step
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-saffron-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-5/12 mb-4 md:mb-0">
                    <div className={`bg-white rounded-xl p-6 shadow-md ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      <div className="inline-block px-4 py-1 bg-saffron-100 text-saffron-700 rounded-full text-sm font-semibold mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-saffron-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>

                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed text-gray-200">
              To be the most trusted and transparent merchant exporter of Indian spices, delivering consistent quality and fostering genuine partnerships with businesses across the globe. We are committed to upholding the rich heritage of Indian spices while meeting international quality standards with integrity and professionalism.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
