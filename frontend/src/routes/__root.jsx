import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import 'remixicon/fonts/remixicon.css';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';


const RootLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Acceuil',  href: '/' },
    { label: 'Team',  href: '/about' },
    { label: 'Boutique',  href: '/store' },
    { label: 'Blog',  href: '/news' },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* NAVBAR */}
        <header className="w-full bg-gradient-to-r from-black via-green-500 to-green-800 text-white shadow-lg h-15">
          <nav className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 lg:mx-8 lg:px-8 lg:py-0">

            {/* LOGO + TITLE */}
            <div className="flex items-center gap-2 md:gap-3">
              <Link
              to="/">
              <img
                src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768744912/01cc6632-b373-40e3-ba6a-018c903c4f3d_ky0oxh.jpg"
                alt="App logo"
                className="h-12 md:h-16 w-12 md:w-16 object-contain hover:cursor-pointer"
              />
              </Link>
              <p className='font-bold text-sm md:text-xl'>Damba SV Freiburg e.V.</p>
              
            {/* <Link
              to="/register"
              className='bg-white text-green-400 rounded-2xl shadow-lg p-2 m-2'
              >Devenir membre
              </Link>  */}

            </div>

            {/* DESKTOP MENU */}
            <div className='hidden md:flex gap-4 '>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2  text-xl rounded-xl relative text-white transition-all after:absolute after:left-0 after:-bottom-1
                             after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full [&.active]:after:w-full [&.active]:font-bold flex items-center gap-2"
                >
                  {link.label}
                  <span><i className={link.icon}></i></span>
                </Link>
              ))}
            </div>

            {/* HAMBURGER BUTTON - MOBILE ONLY */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-all"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="md:hidden bg-black/80 backdrop-blur-sm">
              <div className="flex flex-col gap-2 px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-4 py-3 rounded-lg hover:bg-white/20 transition-all flex items-center gap-2 text-white [&.active]:font-bold [&.active]:bg-white/30"
                    onClick={() => setMenuOpen(false)}
                  >
                    <i className={link.icon}></i>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-1 bg-gray-100 p-4 md:p-6">
          <Outlet />
        </main>

        {/* FOOTER */}
        <footer className='bg-green-600 w-full p-6 flex flex-col md:flex-row gap-6 md:gap-0'>
          
          {/* FOOTER SECTION 1 - LOGO & INFO */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 flex-1">
            <img 
              src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768744912/01cc6632-b373-40e3-ba6a-018c903c4f3d_ky0oxh.jpg"
              alt="logo of the team"
              className='w-24 md:w-40 h-24 md:h-40 object-contain'
            />
            <div className='text-white text-center md:text-left'>
              <p className='font-bold text-lg md:text-xl'>Damba SV Freiburg e.V.</p>
              <p className='text-sm md:text-base'>Allemagne</p>
              <p className='text-sm md:text-base'>Freiburg</p>
              <p className='text-sm md:text-base'>Adresse.....</p>
            </div>

            {/* SOCIAL ICONS */}
            <div className='flex gap-4 text-3xl md:ml-6'>
              <i className="ri-facebook-circle-fill text-white cursor-pointer hover:opacity-80"></i>
              <i className="ri-instagram-line text-white cursor-pointer hover:opacity-80"></i>
              <i className="ri-whatsapp-line text-white cursor-pointer hover:opacity-80"></i>
            </div>
          </div>

          {/* FOOTER SECTION 2 - LINKS */}
          <div className='flex flex-col justify-center text-center md:text-left gap-3 flex-1 hover:cursor-pointer'>
            <p className='text-white hover:bg-white/20 transition-all py-2 px-4 rounded'>A propos du club</p>
            <p className='text-white hover:bg-white/20 transition-all py-2 px-4 rounded'>Contactez nous</p>
            <p className='text-white hover:bg-white/20 transition-all py-2 px-4 rounded'>FAQ</p>
          </div>

          {/* FOOTER SECTION 3 - TAGLINE */}
          <div className='flex flex-col justify-center text-center md:text-right flex-1'> 
            <p className='text-2xl md:text-3xl text-white font-italic hover:bg-white/20 transition-all py-2 px-4 rounded'>Spass eu haben</p>
          </div>
        </footer>

        {/* COPYRIGHT */}
        <div className='bg-green-900 w-full p-3 md:p-4'> 
          <p className='text-white text-xs md:text-sm text-center'>© Copyright Damba SV Freiburg e.V. 2026. Tous droits réservés. Aucune partie de ce site ne peut être reproduite sans notre autorisation écrite.</p>
        </div>
      </div>

      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });