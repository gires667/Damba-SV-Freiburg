import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/tasse')({
  component: ProductPage,
})

export default function ProductPage() {
  const [qty, setQty] = useState(1);

  const product = {
    title: "tasse Damba",
    price: 89.99,
    image: "https://res.cloudinary.com/dc4gctzct/image/upload/v1768474198/envato-labs-image-edit_6_vhfn36.png",
    description: "Sac de sport résistant conçu pour les équipes de football. Grande capacité pour transporter chaussures, maillot et accessoires. Poignées renforcées, bandoulière réglable et compartiments zippés pour un usage pratique au quotidie Idéal pour les entraînements et les matchs.",
  };

  const handleAddCart = () => {
    alert(`${qty} produit(s) ajouté(s) au panier`);
    setQty(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        
        {/* Image */}
        <div className='bg-green-500'>
          <img src={product.image} alt={product.title} className="w-full rounded-lg" />
        </div>

        {/* Infos */}
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          
          <p className="text-2xl font-semibold">€{product.price}</p>
          
          <p className="text-gray-600">{product.description}</p>

          <div className="flex items-center gap-4">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2 border rounded">−</button>
            <span className="text-lg font-medium w-8 text-center">{qty}</span>
            <button onClick={() => setQty(Math.min(product.stock, qty + 1))} className="px-4 py-2 border rounded">+</button>
          </div>

          <button onClick={handleAddCart} className="w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-900">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}