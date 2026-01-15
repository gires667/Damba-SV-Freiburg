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
      className="w-full h-100 object-cover block"
    />
  )
}

function RouteComponent() {
  return (
    <div className=''>
      <h1 className='text-center font-bold text-green-500 text-4xl p-2 bg-white rounded-xl m-2 shadow-2xl'>
        Damba SV Freiburg
      </h1>

      <div className='relative overflow-hidden w-screen -mx-[calc((100vw-100%)/2)]'>
        <LoopVideo />
        <div className='flex flex-row p-2 absolute inset-0 bg-black/40 left-1/2 -translate-x-1/2 w-screen max-w-none'>
          <img 
            src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768474199/envato-labs-image-edit_3_hcp19q.png"
            alt="logo of damba sv frieburg"
            className='w-80 h-80 m-4 p-4'
          />
          <p className='text-white text-xl p-4 m-4'>
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
  
  

      <h1 className='font-bold text-4xl justify-center items-center text-center m-4 '>Membres de l'equipe</h1>


      <div className='flex flex-row items-center justify-center'>
      
      <div className='w-100 h-120 m-4 p-4 rounded-2xl shadow-2xl bg-amber-50'>
      <div className='overflow-hidden'>
      <img
      src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768474200/young-adult-man-standing-on-grassy-sports-field-du-2026-01-05-00-11-56-utc_owi1oi.jpg"
      alt="photo of a member of the team"
      className='transition-transform duration-500 ease-out hover:scale-110'
      />
      </div>
      <CM className='w-15 h-15'></CM>
      <p className='font-bold text-center text-2xl'>TCHAMADEU PIERRE</p>
      <p className='p-2'>Rejoindre cette équipe a tout changé pour moi.
         Je peux jouer, apprendre et partager avec des
          personnes qui vivent la même chose que moi.</p>
      </div>


      <div className='w-100 h-120 m-4 p-4 rounded-2xl shadow-2xl bg-amber-50'>
      <div className='overflow-hidden'>
      <img
      src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768476264/portrait-of-african-american-male-soccer-player-wi-2026-01-09-10-09-12-utc_wkrynw.jpg"
      alt="photo of a member of the team"
      className='transition-tranform duration-500 ease-out hover:scale-110'
      />
      </div>

      <FR className='w-15 h-15'></FR>
      <p className='font-bold text-center text-2xl'>ARTHUR WIXY</p>
      <p className='p-2'>Ce club m’a permis de reprendre confiance en moi.
         Le football m’a aidé à m’intégrer et à rencontrer
          des personnes qui me soutiennent vraiment.</p>
      </div>

      <div className='w-100 h-120 m-4 p-4 rounded-2xl shadow-2xl bg-amber-50'>

      <div className='overflow-hidden'>
      <img
      src="https://res.cloudinary.com/dc4gctzct/image/upload/v1768476265/soccer-ball-football-player-or-portrait-of-black-2026-01-09-11-20-10-utc_jvunop.jpg"
      alt="photo of a member of the team"
      className='transition-transform duration-500 ease-out hover:scale-110'
      />
      </div>

      <DE className='w-15 h-15'></DE>
      <p className='font-bold text-center text-2xl'>SCHNEIDER HAUSS</p>
      <p className='p-2'>"Depuis que j’ai rejoint le club, je ne me sens plus seul.
         Ici, j’ai trouvé une famille, du respect et 
         la force de continuer à avancer."</p>
      </div>

      </div>

    </div>

    
  )
}
