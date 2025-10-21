import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { allProducts } from '../mock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['all', ...new Set(allProducts.map(p => p.category))];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.hsnCode.includes(searchTerm);
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="page-header bg-gradient-to-r from-green-700 to-amber-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl">Premium agricultural commodities for global markets</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Search Bar */}
          <div className="search-wrapper mb-12">
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-green-600 w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Search by product name or HSN code..."
                  className="pl-16 pr-6 py-7 text-lg border-2 border-green-300 focus:border-green-600 rounded-xl shadow-lg bg-white focus:shadow-xl transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <span className="text-2xl">×</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveCategory}>
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="px-6 py-3 text-lg capitalize data-[state=active]:bg-green-700 data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Products Grid */}
          <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <div className="product-card bg-white rounded-xl overflow-hidden border border-green-200 hover:border-green-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="product-image-wrapper relative h-56 bg-gradient-to-br from-green-50 to-amber-50 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="category-badge absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </div>
                  </div>
                  <div className="product-info p-6">
                    <h3 className="text-2xl font-semibold text-green-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">HSN Code: <span className="font-mono font-semibold">{product.hsnCode}</span></p>
                    <p className="text-gray-700 line-clamp-2">{product.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No products found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;