import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/store')({
  component: RouteComponent,
})

function RouteComponent() {
  const products = [
    {
      id: 1,
      name: 'SAC DE SPORT',
      price: '30$',
      image: 'https://res.cloudinary.com/dc4gctzct/image/upload/v1768476124/envato-labs-image-edit_4_1_vapuhe.png',
      alt: 'sac de sport',
      route: '/sac'
    },
    {
      id: 2,
      name: 'Jogging',
      price: '50$',
      image: 'https://res.cloudinary.com/dc4gctzct/image/upload/v1768474199/envato-labs-image-edit_5_g6u2yu.png',
      alt: 'jogging pour football',
      route: '/fit'
    },
    {
      id: 3,
      name: 'Tasse perso',
      price: '15$',
      image: 'https://res.cloudinary.com/dc4gctzct/image/upload/v1768474198/envato-labs-image-edit_6_vhfn36.png',
      alt: 'tasse personnalisée',
      route: '/tasse'
    }
  ];

  return (
    <div className='w-full'>
      {/* HEADER */}
      <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-center text-white bg-green-900 p-2 sm:p-3 md:p-4 flex items-center justify-center gap-3 lg:mx-12'>
        Damba Sv Freiburg Store
        <span><i className="ri-shopping-bag-4-line text-2xl sm:text-3xl md:text-4xl"></i></span>
      </h1>

      {/* PRODUCTS GRID */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 max-w-7xl mx-auto'>

        {/* PRODUCT CARD */}
        {products.map((product) => (
          <div 
            key={product.id}
            className='bg-white rounded-lg shadow-2xl overflow-hidden transition-transform ease-out duration-300 hover:-translate-y-4'
          >
            {/* IMAGE CONTAINER */}
            <div className='w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100'>
              <img
                src={product.image}
                alt={product.alt}
                className='w-full h-full object-contain'
              />
            </div>

            {/* PRODUCT INFO */}
            <div className='p-4 sm:p-6 flex flex-col gap-3'>
              <p className='font-bold text-center text-lg sm:text-xl md:text-2xl text-gray-800'>
                {product.name}
              </p>
              <p className='font-bold text-center text-xl sm:text-2xl md:text-3xl text-green-700'>
                {product.price}
              </p>

              {/* BUTTON */}
              <Link
                to={product.route}
                className="
                  w-full py-2 sm:py-3 md:py-4 px-4
                  rounded-xl
                  bg-green-700 text-white font-bold text-sm sm:text-base md:text-lg
                  transition-all duration-300
                  hover:bg-green-800 hover:scale-[1.02]
                  active:scale-95
                  mt-2
                  block text-center
                "
              >
                Acheter
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default RouteComponent;