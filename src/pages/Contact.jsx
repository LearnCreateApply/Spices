import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Console log the form data
    console.log('Contact Form Submission:', formData);
    
    // Create mailto link
    const subject = encodeURIComponent(`Export Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Company: ${formData.company}\n` +
      `Country: ${formData.country}\n` +
      `Product Interest: ${formData.product}\n` +
      `Estimated Quantity: ${formData.quantity}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:info@indianspiceexports.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      product: '',
      quantity: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      detail: 'info@indianspiceexports.com',
      link: 'mailto:info@indianspiceexports.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      detail: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXXX'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      detail: 'Navi Mumbai, Maharashtra, India',
      link: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      detail: 'Mon - Sat: 9:00 AM - 6:00 PM IST',
      link: null
    }
  ];

  const whatsappNumber = '919876543210';
  const whatsappMessage = 'Hello, I would like to inquire about your spice exports.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Let's discuss your spice export requirements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-saffron-100 text-saffron-600 rounded-lg mb-4">
                  {info.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-700 hover:text-saffron-600 transition-colors"
                  >
                    {info.detail}
                  </a>
                ) : (
                  <p className="text-gray-700">{info.detail}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Send Us an Inquiry
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                        placeholder="United Kingdom"
                      />
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                        Product Interest *
                      </label>
                      <select
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a product</option>
                        <option value="turmeric">Premium Turmeric</option>
                        <option value="cumin">Cumin Seeds</option>
                        <option value="multiple">Multiple Products</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                      placeholder="e.g., 1000 kg, 5 tons, 200 bags"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Please provide details about your requirements, destination port, and any specific quality or packaging needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-saffron-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-saffron-700 transition-colors duration-300 flex items-center justify-center shadow-lg"
                  >
                    Send Inquiry
                    <Send className="ml-2" size={18} />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* WhatsApp Contact */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <MessageCircle size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Quick Response via WhatsApp
                    </h3>
                    <p className="text-gray-700 mb-4">
                      For urgent inquiries or quick questions, reach us directly on WhatsApp. We typically respond within a few hours during business hours.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-saffron-50 border-l-4 border-saffron-600 rounded-r-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-saffron-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Response within 24-48 hours on business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-saffron-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Detailed quotations based on your requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-saffron-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Product samples available on request</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-saffron-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Flexible payment and shipping terms discussion</span>
                  </li>
                </ul>
              </div>

              {/* Office Location */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Location
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start">
                    <MapPin className="w-5 h-5 text-saffron-600 mr-3 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Indian Spice Exports</strong><br />
                      Navi Mumbai, Maharashtra<br />
                      India
                    </span>
                  </p>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> We operate as a merchant exporter. While we don't have a retail storefront, we're always available for business meetings by appointment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
