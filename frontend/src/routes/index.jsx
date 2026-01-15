import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffects } from 'react';


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
<main>

   <section>
          <div className='w-full relative'>
            <img
            src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768476431/soccer-ball-support-or-team-in-a-huddle-for-motiv-2025-04-06-09-28-39-utc_buaqs9.jpg"
            alt="football team players hel around a ball"
            className='w-full  h-[30rem] object-cover shadow-xl'
            />

             <div className="absolute inset-0 bg-black/40"></div>
             <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6'>
              <p className='text-7xl font-bold font-inter'>The pitch is ours</p>

               <Link
        to="/register"
        className="px-4 py-2 m-4 w-80 p-8 rounded-xl text-2xl font-bold bg-green-400 hover:bg-white/20 transition-all [&.active]:font-bold [&.active]:bg-white/30"
      >
        Devenir membre
      </Link>
             </div>
            
          </div>
        </section>

    <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden p-12">

       <div className="p-6 md:w-1/2">
    <h2 className="text-2xl font-bold mb-4">Damba sv frieburg</h2>
    <p className="text-gray-700 mb-4">
      Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
    </p>
    <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
      Devenir membre
    </button>
  </div>

      <div className='md:w-1/2 overflow-hidden'>
      <img 
      src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768476813/cheerful-women-s-soccer-team-screaming-while-celeb-2026-01-06-10-30-22-utc_1_doogqu.jpg"
      alt="football team image"
      className='w-full h-full object-cover rounded-r-xl shadow-xl transition-transform duration-900 ease-in hover:scale-110'
      />
      </div>
      
    </div>


   <div className="relative w-screen h-110 mt-4 -mx-[calc((100vw-100%)/2)] bg-green-500 text-white">
  <div className="max-w-7xl mx-auto px-8 py-16 flex flex-row items-center justify-between gap-16">
    
    {/* IMAGE */}
    <img
      src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768474195/image-gen-removebg-preview_oixory.png"
      alt="my products all at once image"
      className="w-[420px] max-w-full object-contain"
    />

    {/* TEXTE */}
    <div className="flex flex-col items-start gap-6">
      <p className="text-4xl font-bold tracking-tight">
        Retrouver nos Accessoires
      </p>
      <p className='text-xl '>Le pack essentiel du club Damba SV Freiburg.
      Sac, tasse et pull réunis pour afficher fièrement
       tes couleurs, au quotidien comme les jours de match.</p>
      <Link
        to="/store"
        className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-xl shadow-lg hover:bg-white/90 transition"
      >
        Visiter le store
      </Link>
    </div>

  </div>
</div>
</main>
  )
}

export default Index
