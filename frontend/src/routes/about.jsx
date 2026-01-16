import { createFileRoute } from '@tanstack/react-router'
import { DE, FR, SN, ML, CI , CM } from "country-flag-icons/react/3x2";


export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

const LoopVideo = () => {
  return (
    <video
      src="https://res.cloudinary.com/dc4gctzct/video/upload/v1768487298/vid_dwfndf.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover block"
    />
  )
}

function RouteComponent() {
  return (
    <div className='w-full'>
      {/* TITLE */}
      <h1 className='text-center font-bold text-green-500 text-2xl sm:text-2xl md:text-2xl p-2 sm:p-6 bg-white rounded-lg sm:rounded-xl m-2 sm:m-2 md:m-4 shadow-2xl mx-auto max-w-fit'>
        Damba SV Freiburg
      </h1>

      {/* VIDEO SECTION */}
      <div className='relative w-full my-6 sm:my-8 md:my-10 overflow-hidden'>
        {/* VIDEO CONTAINER */}
        <div className='w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-900'>
          <LoopVideo />
        </div>
        
        {/* OVERLAY - positionné correctement */}
        <div className='absolute inset-0 top-0 left-0 w-full h-full bg-black/40 flex items-center p-2 sm:p-6 md:p-8 overflow-y-auto'>
          <div className='flex flex-col md:flex-row gap-3 md:gap-8 items-center md:items-start max-w-6xl mx-auto w-full'>
            
            {/* LOGO */}
            <div className='flex-shrink-0'>
              <img 
                src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768474199/envato-labs-image-edit_3_hcp19q.png"
                alt="logo of damba sv freiburg"
                className='w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain'
              />
            </div>

            {/* TEXT */}
            <p className='text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-left'>
              Damba SV est une équipe de football basée à Fribourg, en Allemagne.
              Le club accompagne principalement des joueurs venus du Cameroun,
              ainsi que des personnes d'autres nationalités, en leur offrant
              la possibilité de jouer au football, d'être soutenus et de s'intégrer.
              À travers le sport, Damba SV crée une véritable communauté où chacun
              peut se retrouver, se sentir entouré et ne plus être seul. Soutenir
              ou sponsoriser l'équipe, c'est participer à un projet humain qui 
              rassemble et redonne de l'espoir
            </p>

          </div>
        </div>
      </div>

      {/* TEAM MEMBERS TITLE */}
      <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl text-center m-6 sm:m-8 md:m-10'>Membres de l'équipe</h2>

      {/* TEAM MEMBERS GRID */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 pb-8'>

        {/* MEMBER 1 */}
        <div className='w-full rounded-2xl shadow-2xl bg-amber-50 overflow-hidden flex flex-col'>
          <div className='w-full h-64 sm:h-72 md:h-80 overflow-hidden'>
            <img
              src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768474200/young-adult-man-standing-on-grassy-sports-field-du-2026-01-05-00-11-56-utc_owi1oi.jpg"
              alt="photo of a member of the team"
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
            />
          </div>
          <div className='p-4 sm:p-6 flex flex-col gap-3'>
            <CM className='w-12 h-12 sm:w-16 sm:h-16'></CM>
            <p className='font-bold text-center text-lg sm:text-xl md:text-2xl'>TCHAMADEU PIERRE</p>
            <p className='text-sm sm:text-base leading-relaxed'>
              Rejoindre cette équipe a tout changé pour moi.
              Je peux jouer, apprendre et partager avec des
              personnes qui vivent la même chose que moi.
            </p>
          </div>
        </div>

        {/* MEMBER 2 */}
        <div className='w-full rounded-2xl shadow-2xl bg-amber-50 overflow-hidden flex flex-col'>
          <div className='w-full h-64 sm:h-72 md:h-80 overflow-hidden'>
            <img
              src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768476264/portrait-of-african-american-male-soccer-player-wi-2026-01-09-10-09-12-utc_wkrynw.jpg"
              alt="photo of a member of the team"
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
            />
          </div>
          <div className='p-4 sm:p-6 flex flex-col gap-3'>
            <FR className='w-12 h-12 sm:w-16 sm:h-16'></FR>
            <p className='font-bold text-center text-lg sm:text-xl md:text-2xl'>ARTHUR WIXY</p>
            <p className='text-sm sm:text-base leading-relaxed'>
              Ce club m'a permis de reprendre confiance en moi.
              Le football m'a aidé à m'intégrer et à rencontrer
              des personnes qui me soutiennent vraiment.
            </p>
          </div>
        </div>

        {/* MEMBER 3 */}
        <div className='w-full rounded-2xl shadow-2xl bg-amber-50 overflow-hidden flex flex-col'>
          <div className='w-full h-64 sm:h-72 md:h-80 overflow-hidden'>
            <img
              src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768476265/soccer-ball-football-player-or-portrait-of-black-2026-01-09-11-20-10-utc_jvunop.jpg"
              alt="photo of a member of the team"
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
            />
          </div>
          <div className='p-4 sm:p-6 flex flex-col gap-3'>
            <DE className='w-12 h-12 sm:w-16 sm:h-16'></DE>
            <p className='font-bold text-center text-lg sm:text-xl md:text-2xl'>SCHNEIDER HAUSS</p>
            <p className='text-sm sm:text-base leading-relaxed'>
              "Depuis que j'ai rejoint le club, je ne me sens plus seul.
              Ici, j'ai trouvé une famille, du respect et 
              la force de continuer à avancer."
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default RouteComponent;