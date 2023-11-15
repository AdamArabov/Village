'use client'
import photosData from "./photo.json"
import { useState,useEffect } from "react";

//add all his photos
export default function Photo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);

  // Function to handle image click
  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setShowFullImage(true);
  };

  // Function to handle next image click
  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % photosData.photos.length;
    setCurrentIndex(nextIndex);
  };

  // Function to handle previous image click
  const handlePrevClick = () => {
    const prevIndex = (currentIndex - 1 + photosData.photos.length) % photosData.photos.length;
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    // Automatic carousel change
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % photosData.photos.length;
      setCurrentIndex(nextIndex);
    }, 10000); // Change image every 10000 milliseconds (10 seconds)

    return () => clearInterval(timer); // Clear the interval on component unmount
  }, [currentIndex]);

  return (
    <div className="container mx-auto py-8">
      {/* Full-size image */}
      {showFullImage && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 flex items-center justify-center">
            <img
              src={photosData.photos[currentIndex].image}
              alt={`Slide ${currentIndex + 1}`}
              className="max-h-screen max-w-screen m-auto"
            />
            <button
              className="absolute top-4 left-4 p-2 rounded-full bg-white text-black hover:bg-gray-200"
              onClick={() => setShowFullImage(false)}
            >
              X
            </button>
            <div className="absolute bottom-4 left-4 space-x-2">
            <button
          className="p-2 rounded-full bg-white text-black hover:bg-gray-200"
          onClick={handlePrevClick}
        >
          ←

        </button>
              </div>
            <div className="absolute bottom-4 right-4 space-x-2">
        
        <button
          className="p-2 rounded-full bg-white text-black hover:bg-gray-200"
          onClick={handleNextClick}
        >
          →
        </button>
      </div>
      
          </div>
        </div>
      )}

      {/* Carousel replacing Featured Image */}
      <div className="relative mb-8">
        <img
          src={photosData.photos[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-96 object-cover cursor-pointer"
          onClick={() => handleImageClick(currentIndex)}
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
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-white bg-opacity-50 p-4 shadow-md rounded-md cursor-pointer"
            onClick={() => handleImageClick(index)}
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