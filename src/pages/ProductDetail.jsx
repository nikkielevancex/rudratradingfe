import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, FileText, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { allProducts } from '../mock';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Product Not Found</h2>
          <Link to="/products">
            <Button className="bg-green-700 hover:bg-green-800">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <section className="breadcrumb bg-green-50 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <button 
            onClick={() => navigate('/products')} 
            className="flex items-center text-green-700 hover:text-green-900 font-medium"
          >
            <ArrowLeft className="mr-2" /> Back to Products
          </button>
        </div>
      </section>

      {/* Product Detail */}
      <section className="product-detail py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="product-image-section">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-50 to-amber-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info-section">
              <div className="mb-4">
                <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
              </div>
              <h1 className="text-5xl font-bold text-green-900 mb-4">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-6">HSN Code: <span className="font-mono font-bold text-green-700">{product.hsnCode}</span></p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{product.description}</p>

              {/* Features */}
              <div className="features-list space-y-4 mb-8">
                <div className="feature-item flex items-start">
                  <Package className="w-6 h-6 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Quality</h3>
                    <p className="text-gray-600">Carefully processed and sortex cleaned</p>
                  </div>
                </div>
                <div className="feature-item flex items-start">
                  <FileText className="w-6 h-6 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Certified Lab Reports</h3>
                    <p className="text-gray-600">Complete transparency with quality documentation</p>
                  </div>
                </div>
                <div className="feature-item flex items-start">
                  <ShieldCheck className="w-6 h-6 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Export Ready</h3>
                    <p className="text-gray-600">Meeting international standards</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="cta-buttons flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex-1">
                  <Button size="lg" className="w-full bg-green-700 hover:bg-green-800 text-white py-6 text-lg">
                    Request Quote
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full border-2 border-green-700 text-green-700 hover:bg-green-50 py-6 text-lg">
                    Inquiry
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="related-products py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allProducts
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/products/${relatedProduct.id}`}>
                  <div className="product-card bg-white rounded-xl overflow-hidden border border-green-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="product-image h-48 bg-gradient-to-br from-green-50 to-amber-50 overflow-hidden">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="product-info p-6">
                      <h3 className="text-xl font-semibold text-green-900 mb-2">{relatedProduct.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">HSN: {relatedProduct.hsnCode}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;