import productsData from './product.json'

//take photo from product, make it home
export default function Product() {
    const featuredImage = '/interior1.jpg'; 
    const otherProducts = productsData.products;
  
    return (
      <div className="container mx-auto py-8">
        {/* Featured Product */}
        <div className="relative mb-8">
        <img src={featuredImage} alt="Featured Product" className="w-full h-96 object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl md:text-7xl text-center font-bold tracking-wide text-white"
          style={{
            textShadow: '2px 2px #cf2361',
            fontWeight: 700,
            textTransform: 'none',
          }}
        >
          Our Products
        </div>
      </div>
  
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