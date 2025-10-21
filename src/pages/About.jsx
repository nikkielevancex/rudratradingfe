import React, { useEffect } from 'react';
import { CheckCircle2, Target, Eye, TrendingUp } from 'lucide-react';
import { companyInfo, mission, vision, goals, whyChooseUs } from '../mock';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header bg-gradient-to-r from-green-700 to-amber-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Pioneering Excellence in Agricultural Trade Since 2016</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6">
                <strong className="text-green-800">{companyInfo.name}</strong> was founded and began operations in {companyInfo.founded} in {companyInfo.location}. 
                Over the years, we have become a leading name in the agricultural trading industry.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We specialize in sourcing and supplying a wide variety of high-quality agricultural commodities, 
                including grains, pulses, oilseeds, spices, and vegetables to international markets.
              </p>
              <p className="text-lg text-gray-700">
                Jamnagar holds crucial strategic importance as a key commodity hub for export, allowing us to 
                efficiently manage and ship products to global clients with a smooth, reliable supply chain.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1625586891982-f0c1b9e23d2b" 
                alt="Agricultural Operations" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-bold">{new Date().getFullYear() - companyInfo.founded}+</p>
                <p className="text-lg">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="mvg-section py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="mvg-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="icon-wrapper bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">{mission}</p>
            </div>

            {/* Vision */}
            <div className="mvg-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="icon-wrapper bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">{vision}</p>
            </div>

            {/* Goals */}
            <div className="mvg-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="icon-wrapper bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">Our Goals</h3>
              <ul className="space-y-3">
                {goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">What sets us apart in the agricultural trading industry</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="choose-card bg-gradient-to-br from-white to-green-50 p-6 rounded-xl border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-green-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="certifications-section py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-gray-600">Internationally recognized certifications ensuring quality and safety</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="certification-card bg-white p-6 rounded-xl border-2 border-green-200 hover:border-green-500 hover:shadow-xl transition-all duration-300">
              <div className="certification-icon bg-green-700 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                F
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2 text-center">FSSAI</h3>
              <p className="text-sm text-gray-600 text-center">Food Safety and Standards Authority of India - Ensures food safety compliance</p>
            </div>
            
            <div className="certification-card bg-white p-6 rounded-xl border-2 border-amber-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300">
              <div className="certification-icon bg-amber-700 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                A
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2 text-center">AGMARK</h3>
              <p className="text-sm text-gray-600 text-center">Agricultural Produce (Grading and Marking) Act - Quality certification mark</p>
            </div>
            
            <div className="certification-card bg-white p-6 rounded-xl border-2 border-green-200 hover:border-green-500 hover:shadow-xl transition-all duration-300">
              <div className="certification-icon bg-green-700 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                A
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2 text-center">APEDA</h3>
              <p className="text-sm text-gray-600 text-center">Agricultural and Processed Food Products Export Development Authority</p>
            </div>
            
            <div className="certification-card bg-white p-6 rounded-xl border-2 border-amber-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300">
              <div className="certification-icon bg-amber-700 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                P
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2 text-center">PQMS</h3>
              <p className="text-sm text-gray-600 text-center">Plant Quarantine Management System - Phytosanitary certification</p>
            </div>
            
            <div className="certification-card bg-white p-6 rounded-xl border-2 border-green-200 hover:border-green-500 hover:shadow-xl transition-all duration-300">
              <div className="certification-icon bg-green-700 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                I
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2 text-center">IEC</h3>
              <p className="text-sm text-gray-600 text-center">Importer-Exporter Code - License for international trade operations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;