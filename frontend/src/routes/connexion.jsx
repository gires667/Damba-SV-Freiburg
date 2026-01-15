import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/connexion')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='p-6 m-6 bg-green-100 flex justify-center items-center shadow-2xl '>

    <form
  className="
    w-[420px] mx-auto mt-16
    rounded-2xl bg-green-500
    shadow-2xl
    transform transition-all duration-300 ease-out
    hover:-translate-y-1 hover:shadow-3xl
  "
>
  {/* Titre */}
  <p className="font-bold text-3xl text-center text-white pt-8">
    Inscris toi
  </p>

  {/* Champs */}
  <div className="flex flex-col gap-6 px-10 py-10">
    
    {/* Email */}
    <div>
      <label className="block text-lg font-semibold text-white mb-2">
        Email
      </label>
      <input
        type="email"
        name="email"
        placeholder="joey@gmail.com"
        className="
          w-full bg-white rounded-xl px-4 py-3
          shadow-md
          outline-none
          focus:ring-4 focus:ring-green-200
          transition
        "
        required
      />
    </div>

    {/* Password */}
    <div>
      <label className="block text-lg font-semibold text-white mb-2">
        Mot de passe
      </label>
      <input
        type="password"
        name="password"
        placeholder="••••••••"
        className="
          w-full bg-white rounded-xl px-4 py-3
          shadow-md
          outline-none
          focus:ring-4 focus:ring-green-200
          transition
        "
        required
      />
    </div>


    <div>
      <label className="block text-lg font-semibold text-white mb-2">
        Confirmer Mot de passe
      </label>
      <input
        type="password"
        name="password"
        placeholder="••••••••"
        className="
          w-full bg-white rounded-xl px-4 py-3
          shadow-md
          outline-none
          focus:ring-4 focus:ring-green-200
          transition
        "
        required
      />
    </div>

    {/* Bouton */}
    <button
      type="submit"
      className="
        mt-6 w-full py-3
        rounded-xl
        bg-green-700 text-white font-bold text-lg
        transition-all duration-300
        hover:bg-green-800 hover:scale-[1.02]
        active:scale-95
      "
    >
      Connexion
    </button>


    <div>
    <Link to="/register"
    className='text-white
    hover:text-blue-600'
    >j'ai deja un compte (me connecter) </Link>
    </div>

  </div>
</form>


  </div>
}

