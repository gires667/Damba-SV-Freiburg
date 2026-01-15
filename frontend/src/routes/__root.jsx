import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import 'remixicon/fonts/remixicon.css';


const RootLayout = () => (
  <>
    <div className="min-h-screen flex flex-col">
  {/* NAVBAR */}
  <header className="w-full bg-gradient-to-r from-black via-green-500 to-green-800 text-white shadow-lg">
    <nav className="flex items-center justify-between px-6 py-4 text-xl">

      {/* LOGO + TITLE */}
      <div className="flex items-center gap-3">
        <img
          src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768474199/envato-labs-image-edit_3_hcp19q.png"
          alt="App logo"
          className="h-16 w-16 object-contain hover:cursor-pointer"
        />
        <p className='font-bold'>Damba SV freiburg</p>
      </div>

      <div className='flex gap-4'>
      {/* LINKS */}
      <Link
        to="/"
        className="px-4 py-2 rounded-xl hover:bg-white/20 transition-all [&.active]:font-bold [&.active]:bg-white/30"
      >
        Acceuil
        <span><i class="ri-home-4-line"></i></span>
      </Link>

      <Link
        to="/about"
        className="px-4 py-2  rounded-xl hover:bg-white/20 transition-all [&.active]:font-bold [&.active]:bg-white/30"
      >
        Team
        <span><i class="ri-team-fill"></i></span>
      </Link>

      <Link
        to="/store"
        className="px-4 py-2 rounded-xl hover:bg-white/20 transition-all [&.active]:font-bold [&.active]:bg-white/30"
      >
        Boutiques
        <span><i class="ri-shopping-bag-4-line"></i></span>
      </Link>


      <Link
        to="/news"
        className="px-4 py-2  rounded-xl  hover:bg-white/20 transition-all [&.active]:font-bold [&.active]:bg-white/30"
      >
        Infos
        <span><i class="ri-newspaper-fill"></i></span>
      </Link>
      </div>
       
    </nav>
  </header>


  {/* MAIN CONTENT */}
  <main className="flex-1 bg-gray-100 p-6">
    <Outlet />
  </main>
</div>

   



  <footer className='bg-green-600 w-full p-6 flex flex-row '>
    <div classname="flex items-center space-x-4">
    <img 
    src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768474199/envato-labs-image-edit_3_hcp19q.png"
    alt="logo of the team"
    className='w-40 h-40 object-contain p-8 ml-20'
    />
    <p className='text-white font-bold ml-30'>Damba sv freiburg</p>
    <p className='text-white  ml-30'>Allemagne</p>
    <p className='text-white  ml-30'>Freiburg</p>
    <p className='text-white  ml-30'>Adresse.....</p>

    <i className="ri-facebook-circle-fill text-white text-4xl ml-26"></i>
    <i className="ri-instagram-line text-white text-4xl"></i>
    <i className="ri-whatsapp-line text-white text-4xl"></i>
  
    </div>

   
    <div className='flex flex-col justify-center align-middle hover:cursor-pointer'>
      <p className='ml-16  mt-12 text-white p-6 justify-center text-2xl'> A propos du club</p>
      <p className='ml-16 pl-6 text-white  justify-center text-2xl'> Contactez nous</p>
      <p className='ml-16 pl-6 mt-6 text-white  justify-center text-2xl'> FAQ</p>
    </div>

    <div className='flex flex-col justify-center hover:cursor-pointer '> 
    <p className='text-3xl text-white font-bold ml-40 hover:bg-white/20 transition-all [&.active]:font-bold [&.active]:bg-white/30'>every where you go the pitch is ours </p>
    </div>
  </footer>

  <div className='bg-green-900 w-full p-2'> 
    <p className='text-white'> © copyright Damba sv freiburg 2026. Tous droits réservés. Aucune partie de ce site ne peut être reproduite sans notre autorisation écrite.</p>

  </div>


    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })
