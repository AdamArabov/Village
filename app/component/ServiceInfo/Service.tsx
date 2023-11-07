'use client'
import servicesData from './service.json'


export default function Service() {
    return (
      <div className="service-container">
        {servicesData.services.map((service, index) => (
          <div
            key={index}
            className="service-section bg-cover relative h-screen"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundAttachment: 'fixed',
            }}
          >
            <div className="service-content absolute inset-0 flex items-center justify-center bg-opacity-50 bg-gray-200">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  
  
  
  
  
  
  
  