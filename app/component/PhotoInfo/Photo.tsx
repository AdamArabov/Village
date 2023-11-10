'use client'
import photosData from "./photo.json"
import { useState,useEffect } from "react";

export default function Photo() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % photosData.photos.length);
        }, 10000); // Change image every 5000 milliseconds (5 seconds)

        return () => clearInterval(timer); // Clear the interval on component unmount
    }, []);

    return (
      <div className="container mx-auto py-8">
        {/* Carousel replacing Featured Image */}
        <div className="relative mb-8">
          <img 
            src={photosData.photos[currentIndex].image} 
            alt={`Slide ${currentIndex + 1}`} 
            className="w-full h-96 object-cover" 
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40"></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl md:text-7xl text-center font-bold tracking-wide text-white"
            style={{
              textShadow: '2px 2px #cf2361',
              fontWeight: 700,
              textTransform: 'none',
            }}
          >
            Our Photos
          </div>
        </div>
  
        {/* Photos from JSON in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photosData.photos.map((photo, index) => (
            <div 
              key={index} 
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-white bg-opacity-50 p-4 shadow-md rounded-md"
            >
              <img
                src={photo.image}
                alt={`Photo ${index + 1}`}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    );
}
