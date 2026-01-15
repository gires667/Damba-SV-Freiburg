import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/news')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div> 
 <h1 className='text-2xl justify-center items-center text-center bg-green-900  p-4 m-4 text-white font-bold'>Infos du club</h1>

<div className='flex flex-row '>
  
  <div className='flex flex-col m-4 rounded-lg shadow-lg bg-black/70 h-100 text-white p-4'>
  <h2 className='font-bold  text-5xl justify-center m-2 '>VICTOIRE RISING CUP</h2>
  <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et
     la mise en page avant impression. Le Lorem Ipsum est le faux texte standard
      de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla 
      ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
       Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique
        informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les
         années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem 
         Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page
          de texte, comme Aldus PageMaker.</p>
  </div>
</div>
    
    <p className='justify-start items-center m-4 text-3xl font-bold text-green-500'>Actualités Damba SV</p>

 <div className='flex flex-row m-4 gap-2 justify-center items-center'>
  
  
   <div className='m-4 p-0 bg-green-500 shadow-2xl rounded-lg w-100 h-130 flex flex-col overflow-hidden'>
      {/* Section image - 50% */}
      <div 
        className='w-full h-1/2 overflow-hidden relative'
      >
        <img 
          src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768474203/sports-winning-and-team-on-field-for-celebration-2026-01-09-10-22-17-utc_fkoaaj.jpg"
          alt="football player winning FA cup held together screaming of joy"
          className='w-full h-full object-cover transition-transform duration-900 ease-in hover:scale-110 '
            />
      </div>
      {/* Section texte verte - 50% */}
      <div className='w-full h-1/2  flex flex-col items-center justify-center p-4 overflow-hidden '>
      <h2 className='text-center font-bold text-2xl text-black p-4'>FA Cup Remporter</h2>
      <p className='text-white text-lg p-2'>Le Lorem Ipsum est simplement du faux texte employé dans la 
        composition et la mise en page avant impression. Le Lorem Ipsum
         est le faux texte standard de l'imprimerie depuis les années 1500,
         quand un imprimeur anonyme assembla </p>
      </div>
    </div>

  
  <div className='m-4 p-0 bg-green-500 shadow-2xl rounded-lg w-100 h-130 flex flex-col overflow-hidden'>
      {/* Section image - 50% */}
      <div 
        className='w-full h-1/2 overflow-hidden relative'
      >
        <img 
          src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768474194/360_F_203202196_XuyYuGityby4eflREaxmN0W5mfbNuGzH_pxzmbc.jpg"
          alt="football player winning FA cup held together screaming of joy"
          className='w-full h-full object-cover transition-transform duration-900 ease-in hover:scale-110 '
            />
      </div>
      {/* Section texte verte - 50% */}
      <div className='w-full h-1/2  flex flex-col items-center justify-center p-4 overflow-hidden '>
      <h2 className='text-center font-bold text-2xl text-black p-4'>Victoire Stuttgart</h2>
      <p className='text-white text-lg p-2'>Le Lorem Ipsum est simplement du faux texte employé dans la 
        composition et la mise en page avant impression. Le Lorem Ipsum
         est le faux texte standard de l'imprimerie depuis les années 1500,
         quand un imprimeur anonyme assembla </p>
      </div>
    </div>


    <div className='m-4 p-0 bg-green-500 shadow-2xl rounded-lg w-100 h-130 flex flex-col overflow-hidden'>
      {/* Section image - 50% */}
      <div 
        className='w-full h-1/2 overflow-hidden relative'
      >
        <img 
          src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768474197/soccer-soccer-ball-and-man-slide-tackle-during-ma-2026-01-09-09-54-46-utc_hhaeth.jpg"
          alt="football player winning FA cup held together screaming of joy"
          className='w-full h-full object-cover transition-transform duration-900 ease-in hover:scale-110 '
            />
      </div>
      {/* Section texte verte - 50% */}
      <div className='w-full h-1/2  flex flex-col items-center justify-center p-4 overflow-hidden '>
      <h2 className='text-center font-bold text-2xl text-black p-4'>Incroyable But</h2>
      <p className='text-white text-lg p-2'>Le Lorem Ipsum est simplement du faux texte employé dans la 
        composition et la mise en page avant impression. Le Lorem Ipsum
         est le faux texte standard de l'imprimerie depuis les années 1500,
         quand un imprimeur anonyme assembla </p>
      </div>
    </div>
  


 </div>
</div>
}
