import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { contactInfo } from '../mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header bg-gradient-to-r from-green-700 to-amber-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="contact-info">
              <h2 className="text-3xl font-bold text-green-900 mb-8">Get In Touch</h2>
              
              {/* Address */}
              <div className="info-item mb-8 flex items-start">
                <div className="icon-wrapper bg-green-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Our Address</h3>
                  <p className="text-gray-700">
                    {contactInfo.address}<br />
                    {contactInfo.city}, {contactInfo.state}<br />
                    {contactInfo.country} - {contactInfo.pincode}
                  </p>
                </div>
              </div>

              {/* Contacts */}
              <div className="info-item mb-8">
                <div className="flex items-start mb-6">
                  <div className="icon-wrapper bg-amber-100 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Phone Numbers</h3>
                    {contactInfo.contacts.map((contact, index) => (
                      <div key={index} className="mb-2">
                        <p className="text-gray-700 font-medium">{contact.name}</p>
                        <a href={`tel:${contact.phone}`} className="text-green-700 hover:text-green-900">
                          {contact.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="info-item mb-8 flex items-start">
                <div className="icon-wrapper bg-green-100 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Email Addresses</h3>
                  {contactInfo.contacts.map((contact, index) => (
                    <a 
                      key={index}
                      href={`mailto:${contact.email}`} 
                      className="block text-green-700 hover:text-green-900 mb-1"
                    >
                      {contact.email}
                    </a>
                  ))}
                </div>
              </div>

              {/* Shipping Port */}
              <div className="info-item mb-8 flex items-start">
                <div className="icon-wrapper bg-amber-100 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Shipping Port</h3>
                  <p className="text-gray-700">{contactInfo.shippingPort}</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="certifications mt-8">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Certifications & Compliance</h3>
                <div className="grid grid-cols-2 gap-3">
                  {contactInfo.certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm font-semibold text-center hover:border-green-400 hover:shadow-md transition-all duration-300"
                    >
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-green-100">
                <h2 className="text-3xl font-bold text-green-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-2 border-green-200 focus:border-green-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-2 border-green-200 focus:border-green-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-2 border-green-200 focus:border-green-500"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border-2 border-green-200 focus:border-green-500"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border-2 border-green-200 focus:border-green-500"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-6 text-lg"
                  >
                    Send Message <Send className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Find Us On Map</h2>
          <div className="map-wrapper rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.516622436712!2d70.04747931495932!3d22.77083698506087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b5a6a8e07b63%3A0x1d6e5ca8a8e07b63!2sJamnagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rudra Trading Co. Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;