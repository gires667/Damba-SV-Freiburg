import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/news')({
  component: RouteComponent,
})

function RouteComponent() {
  const news = [
    {
      id: 1,
      title: 'FA Cup Remporter',
      description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla',
      image: 'https://res.cloudinary.com/dc4gctzct/image/upload/v1768474203/sports-winning-and-team-on-field-for-celebration-2026-01-09-10-22-17-utc_fkoaaj.jpg'
    },
    {
      id: 2,
      title: 'Victoire Stuttgart',
      description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla',
      image: 'https://res.cloudinary.com/dc4gctzct/image/upload/v1768474194/360_F_203202196_XuyYuGityby4eflREaxmN0W5mfbNuGzH_pxzmbc.jpg'
    },
    {
      id: 3,
      title: 'Incroyable But',
      description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla',
      image: 'https://res.cloudinary.com/dc4gctzct/image/upload/v1768474197/soccer-soccer-ball-and-man-slide-tackle-during-ma-2026-01-09-09-54-46-utc_hhaeth.jpg'
    }
  ];

  return (
    <div className='w-full'>
      {/* HEADER */}
      <h1 className='text-2xl sm:text-3xl md:text-4xl text-center bg-green-900 p-4 sm:p-6 md:p-8 text-white font-bold'>
        Infos du club
      </h1>

      {/* FEATURED NEWS */}
      <div className='w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10'>
        <div className='flex flex-col rounded-lg shadow-lg bg-black/70 p-4 sm:p-6 md:p-8 text-white'>
          <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center m-2 sm:m-4'>
            VICTOIRE RISING CUP
          </h2>
          <p className='text-sm sm:text-base md:text-lg leading-relaxed mt-4'>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et
            la mise en page avant impression. Le Lorem Ipsum est le faux texte standard
            de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla 
            ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
            Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique
            informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les
            années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem 
            Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page
            de texte, comme Aldus PageMaker.
          </p>
        </div>
      </div>

      {/* ACTUALITÉS TITLE */}
      <p className='px-4 sm:px-6 md:px-8 lg:px-10 text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 mb-6 sm:mb-8'>
        Actualités Damba SV
      </p>

      {/* NEWS GRID */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-10 pb-10'>
        
        {news.map((item) => (
          <div 
            key={item.id}
            className='p-0 bg-green-500 shadow-2xl rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300'
          >
            {/* IMAGE SECTION - 50% */}
            <div className='w-full h-48 sm:h-56 md:h-64 overflow-hidden relative'>
              <img 
                src={item.image}
                alt={item.title}
                className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
              />
            </div>

            {/* TEXT SECTION - 50% */}
            <div className='w-full flex-1 flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden'>
              <h2 className='text-center font-bold text-lg sm:text-xl md:text-2xl text-black mb-3'>
                {item.title}
              </h2>
              <p className='text-white text-sm sm:text-base leading-relaxed'>
                {item.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default RouteComponent;