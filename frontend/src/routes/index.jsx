import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffects } from 'react';


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="w-full">
        <div className='relative w-full h-64 sm:h-80 md:h-96 lg:h-[30rem]'>
          <img
            src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768476431/soccer-ball-support-or-team-in-a-huddle-for-motiv-2025-04-06-09-28-39-utc_buaqs9.jpg"
            alt="football team players help around a ball"
            className='w-full h-full object-cover'
          />

          <div className="absolute inset-0 bg-black/40"></div>
          <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 gap-6'>
            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>The pitch is ours</p>

            <Link
              to="/register"
              className="px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-base sm:text-lg md:text-xl font-bold bg-green-400 hover:bg-green-500 transition-all w-48 sm:w-64 md:w-72 text-center"
            >
              Devenir membre
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <div className="flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-lg overflow-hidden mx-4 sm:mx-6 md:mx-8 lg:mx-12 my-8 sm:my-10 md:my-12">

        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Damba sv frieburg</h2>
          <p className="text-sm sm:text-base md:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
          </p>
          <button className="px-6 py-3 sm:py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base font-semibold w-fit">
            Devenir membre
          </button>
        </div>

        <div className='w-full md:w-1/2 h-64 sm:h-80 md:h-auto overflow-hidden'>
          <img 
            src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768476813/cheerful-women-s-soccer-team-screaming-while-celeb-2026-01-06-10-30-22-utc_1_doogqu.jpg"
            alt="football team image"
            className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
          />
        </div>
      </div>

      {/* STORE SECTION */}
      <div className="w-full bg-green-500 text-white py-8 sm:py-10 md:py-12 lg:py-14 mt-8 sm:mt-10 md:mt-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
      
      {/* IMAGE */}
      <div className='w-full lg:w-auto flex justify-center flex-shrink-0'>
        <img
          src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768474195/image-gen-removebg-preview_oixory.png"
          alt="products image"
          className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-80 object-contain"
        />
      </div>

      {/* TEXTE */}
      <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-4 w-full lg:w-auto">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold tracking-tight text-center lg:text-left">
          Retrouver nos Accessoires
        </h3>
        <p className='text-xs sm:text-sm md:text-base text-center lg:text-left leading-relaxed max-w-md lg:max-w-none'>
          Le pack essentiel du club Damba SV Freiburg.
          Sac, tasse et pull réunis pour afficher fièrement
          tes couleurs, au quotidien comme les jours de match.
        </p>
        <Link
          to="/store"
          className="inline-flex items-center justify-center px-6 py-2 sm:py-3 bg-white text-green-600 font-semibold rounded-xl shadow-lg hover:bg-white/90 transition text-xs sm:text-sm w-full sm:w-auto"
        >
          Visiter le store
        </Link>
      </div>

    </div>
  </div>
</div>
    </main>
  );
}

export default Index;