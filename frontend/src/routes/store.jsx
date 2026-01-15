import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/store')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    
    <h1 className='font-bold text-2xl justify-center items-center text-center text-white bg-green-900 p-4'>Damba Sv Freiburg Store
      <span><i class="ri-shopping-bag-4-line"></i></span>
    </h1>
    <div className='flex flex-row gap-4 p-6 m-4 justify-center items-center'>

    <div className='w-100 h-125 bg-white  rounded-lg shadow-2xl transition-transform ease-out duration-300 hover:-translate-y-4'>
    <img
    src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768476124/envato-labs-image-edit_4_1_vapuhe.png"
    alt="this is a bag image"
    className=''
    />
    <p className='justify-center items-center text-center font-bold p-4 text-2xl'>SAC DE SPORT</p>
    <p className='justify-center items-center text-center p-2 font-bold text-2xl'> 30$</p>
    <button
      type="submit"
      className="
        m-2 ml-17  w-64 py-3
        rounded-xl
        bg-green-700 text-white font-bold text-lg
        transition-all duration-300
        hover:bg-green-800 hover:scale-[1.02]
        active:scale-95
      "
    >
      Acheter
    </button>

    </div>

    <div className='w-100 h-125 bg-white  rounded-lg shadow-2xl transition-transform ease-out duration-300 hover:-translate-y-4'>
       <img
    src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768474199/envato-labs-image-edit_5_g6u2yu.png"
    alt="this is a men fit for football"
    className='w-80 h-80 object-cover'
    />
    <p className='justify-center items-center text-center font-bold p-4 text-2xl'>Jogging</p>
    <p className='justify-center items-center text-center p-2 font-bold text-2xl'> 50$</p>
    <button
      type="submit"
      className="
        m-2 ml-17  w-64 py-3
        rounded-xl
        bg-green-700 text-white font-bold text-lg
        transition-all duration-300
        hover:bg-green-800 hover:scale-[1.02]
        active:scale-95
      "
    >
      Acheter
    </button>

    </div>

    <div className='w-100 h-125 bg-white  rounded-lg shadow-2xl transition-transform ease-out duration-300 hover:-translate-y-4'>
       <img
    src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768474198/envato-labs-image-edit_6_vhfn36.png"
    alt="this is a men fit for football"
    className='m-7'
    />

    <p className='justify-center items-center text-center font-bold p-4 text-2xl'>Tasse perso</p>
    <p className='justify-center items-center text-center p-2 font-bold text-2xl'> 15$</p>
    <button
      type="submit"
      className="
        m-2 ml-17  w-64 py-3
        rounded-xl
        bg-green-700 text-white font-bold text-lg
        transition-all duration-300
        hover:bg-green-800 hover:scale-[1.02]
        active:scale-95
      "
    >
      Acheter
    </button>

      
    </div>


    </div>
    </div>
}
