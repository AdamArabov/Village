import productsData from './product.json'

export default function Product() {
    const featuredImage = 'https://www.themacallan.com/sites/default/files/styles/hero_image_small/public/MAC-2022-Lifestyle-Accessories-Illustration-Picnic-16x9-400dpi-1MB.jpg?itok=yflBBoXE'; // Replace with the path to your featured image
    const otherProducts = productsData.products;
  
    return (
      <div className="container mx-auto py-8">
        {/* Featured Product */}
        <img src={featuredImage} alt="Featured Product" className="w-full h-96 object-cover mb-8" />
  
        {/* Other Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProducts.map((product, index) => (
            <div 
            key={index} 
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-white bg-opacity-50 p-4 shadow-md rounded-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-4 text-center">
                <h2 className="text-xl text-vill font-semibold">{product.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }