import React, { useState } from 'react';
import { Calendar, Eye, ArrowRight, Image } from 'lucide-react';

const NewsGallery = () => {
  const [activeTab, setActiveTab] = useState('news');

  const newsItems = [
    {
      id: 1,
      title: "West Lake Capital Announces New Digital Banking Platform",
      excerpt: "Revolutionary new platform offers enhanced security and user experience for all customers.",
      date: "2024-01-15",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
      views: 1250
    },
    {
      id: 2,
      title: "Record Growth in SME Lending Portfolio",
      excerpt: "West Lake Capital reports 40% growth in small business lending, supporting local entrepreneurs.",
      date: "2024-01-10",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
      views: 980
    },
    {
      id: 3,
      title: "New Branch Opening in Downtown District",
      excerpt: "Expanding our reach to better serve customers with a state-of-the-art banking facility.",
      date: "2024-01-05",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
      views: 756
    },
    {
      id: 4,
      title: "Financial Literacy Program Reaches 10,000 Students",
      excerpt: "Our community outreach program continues to educate young minds about financial responsibility.",
      date: "2023-12-28",
      image: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1",
      views: 642
    }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Grand Opening Ceremony",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      category: "Events"
    },
    {
      id: 2,
      title: "Customer Appreciation Day",
      image: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      category: "Events"
    },
    {
      id: 3,
      title: "Modern Banking Hall",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      category: "Facilities"
    },
    {
      id: 4,
      title: "Digital Banking Kiosks",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      category: "Technology"
    },
    {
      id: 5,
      title: "Community Outreach Program",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      category: "Community"
    },
    {
      id: 6,
      title: "Financial Literacy Workshop",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      category: "Education"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Gallery</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Stay updated with the latest news and explore our gallery of memorable moments
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-3 font-medium rounded-lg transition-colors duration-200 ${
                activeTab === 'news'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-3 font-medium rounded-lg transition-colors duration-200 ${
                activeTab === 'gallery'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Photo Gallery
            </button>
          </div>
        </div>
      </section>

      {/* News Section */}
      {activeTab === 'news' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsItems.map((item) => (
                <article key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                      <Eye className="h-4 w-4 ml-4 mr-2" />
                      <span>{item.views} views</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <button className="flex items-center text-green-600 hover:text-green-700 font-medium">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {activeTab === 'gallery' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Image className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-medium">View Image</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter to receive the latest news and updates from West Lake Capital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsGallery;