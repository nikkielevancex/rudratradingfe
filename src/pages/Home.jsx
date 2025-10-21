import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Globe, Truck, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo, primaryProducts } from '../mock';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-amber-900/80 z-10"></div>
        <div 
          className="hero-background absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1597946824516-458f3af73a50)' }}
        ></div>
        
        <div className="hero-content relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            {companyInfo.name}
          </h1>
          <p className="hero-tagline text-2xl md:text-3xl mb-8 font-light">
            {companyInfo.tagline}
          </p>
          <p className="hero-description text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            {companyInfo.description}
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
                Explore Products <ChevronRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card text-center p-6 bg-gradient-to-br from-white to-green-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="feature-icon bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-900">Quality Assured</h3>
              <p className="text-gray-600">Certified lab reports for every product</p>
            </div>
            
            <div className="feature-card text-center p-6 bg-gradient-to-br from-white to-amber-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="feature-icon bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-900">Global Reach</h3>
              <p className="text-gray-600">Exporting to international markets</p>
            </div>
            
            <div className="feature-card text-center p-6 bg-gradient-to-br from-white to-green-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="feature-icon bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-900">Reliable Logistics</h3>
              <p className="text-gray-600">Strategic location in Jamnagar</p>
            </div>
            
            <div className="feature-card text-center p-6 bg-gradient-to-br from-white to-amber-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="feature-icon bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-900">8+ Years Experience</h3>
              <p className="text-gray-600">Trusted since 2016</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600">Certified and compliant with international standards</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="certification-card bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="certification-icon bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                F
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-1">FSSAI</h3>
              <p className="text-sm text-gray-600">Food Safety Standards</p>
            </div>
            
            <div className="certification-card bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="certification-icon bg-amber-700 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                A
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-1">AGMARK</h3>
              <p className="text-sm text-gray-600">Quality Certification</p>
            </div>
            
            <div className="certification-card bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="certification-icon bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                A
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-1">APEDA</h3>
              <p className="text-sm text-gray-600">Export Promotion</p>
            </div>
            
            <div className="certification-card bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="certification-icon bg-amber-700 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                P
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-1">PQMS</h3>
              <p className="text-sm text-gray-600">Phytosanitary</p>
            </div>
            
            <div className="certification-card bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="certification-icon bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                I
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-1">IEC</h3>
              <p className="text-sm text-gray-600">Import-Export Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Our Premium Products</h2>
            <p className="text-xl text-gray-600">High-quality agricultural commodities for global markets</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryProducts.slice(0, 6).map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <div className="product-card bg-white border border-green-200 rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="product-image h-48 bg-gradient-to-br from-green-50 to-amber-50 flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="product-info p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">HSN: {product.hsnCode}</p>
                    <p className="text-gray-700 text-sm line-clamp-2">{product.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg">
                View All Products <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 bg-gradient-to-r from-green-800 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8">Join hundreds of satisfied clients who trust Rudra Trading Co. for their agricultural commodity needs</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100 px-8 py-6 text-lg">
              Get in Touch Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;