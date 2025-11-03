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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://rudratrading-backend.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to send message. Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. The server might be waking up. Please try again in a moment.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
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
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-6 text-lg flex items-center justify-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2" />
                      </>
                    )}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59000.267005393674!2d70.07474630257624!3d22.447209918026385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3957697f00751747%3A0x9bc2ee5c3b191b29!2sMarketing%20Yard%2C%20143%2FB%2C%20Hapa%2C%20Gujarat%20361120!5e0!3m2!1sen!2sin!4v1761025161075!5m2!1sen!2sin"
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