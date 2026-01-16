import { createFileRoute } from '@tanstack/react-router'
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import 'remixicon/fonts/remixicon.css';

export const Route = createFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className=''>
      <h1 className='justify-center items-center text-center font-bold text-3xl m-2'>Devenir Membre<span className='m-2'><i class="ri-user-community-line"></i></span></h1>
      <RegistrationForm />
    </div>
  )
}

function RegistrationForm() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { type: "supporter" }
  });

  const watchType = watch("type");

  // ✅ SYNTAXE CORRECTE pour React Query v5
  const mutation = useMutation({
    mutationFn: (data) => axios.post("https://127.0.0.1:8000/api/users", data),
    onSuccess: () => {
      alert("Inscription réussie !");
    },
    onError: (error) => {
      console.error("Erreur complète:", error);
      console.error("Réponse du serveur:", error.response?.data);
      alert("Erreur lors de l'inscription");
    }
  });

  const onSubmit = (data) => {
    if (watchType === "joueur") {
      data.licence = data.licence ? true : false;
    }
    
    console.log("Données envoyées:", data); // Pour debug
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-8 max-w-md mx-auto bg-green-400 m-8 items-center justify-center rounded-2xl shadow-2xl">

      <div>
        <label className="block font-medium">Type de membre</label>
        <select {...register("type")} className="bg-white rounded-lg p-2 w-full">
          <option value="supporter">Supporter</option>
          <option value="sponsor">Sponsor</option>
          <option value="joueur">Joueur</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Nom</label>
        <input {...register("nom")} className="p-2 w-full rounded-lg bg-white" required />
      </div>

      <div>
        <label className="block font-medium">Prénom</label>
        <input {...register("prenom")} className="p-2 w-full rounded-lg bg-white" required />
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input type="email" {...register("email")} className="p-2 w-full rounded-lg bg-white" required />
      </div>

      <div>
        <label className="block font-medium">Portable</label>
        <input {...register("phoneNumber")} className="p-2 w-full rounded-lg bg-white" required />
      </div>

      {watchType === "joueur" && (
        <>
          <div>
            <label className="block font-medium">Âge</label>
            <input type="number" {...register("age")} className="bg-white rounded-lg p-2 w-full" required />
          </div>
          <div>
            <label className="block font-medium">Poste</label>
            <input {...register("poste")} className="bg-white rounded-lg p-2 w-full" required />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" {...register("licence")} />
            <label>Licence</label>
          </div>
        </>
      )}

      {watchType === "sponsor" && (
        <>
          <div>
            <label className="block font-medium">Société</label>
            <input {...register("societe")} className="bg-white rounded-lg p-2 w-full" required />
          </div>
          <div>
            <label className="block font-medium">Budget</label>
            <input type="number" {...register("budget")} className="bg-white rounded-lg p-2 w-full" />
          </div>
        </>
      )}

      <button 
        type="submit" 
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Inscription en cours..." : "S'inscrire"}
      </button>

      {mutation.isError && (
        <div className="text-red-600 text-sm">
          Erreur: Vérifiez la console (F12) pour plus de détails
        </div>
      )}
    </form>
  );
}