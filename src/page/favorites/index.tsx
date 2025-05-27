import  { useState } from 'react';

type Plant = {
  id: number;
  name: string;
  imageUrl: string;
  description?: string;
};

const Favorites = () => {
  const [favoritePlants, setFavoritePlants] = useState<Plant[]>([
    {
      id: 1,
      name: 'Monstera Deliciosa',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/02/01/18/17/monstera-2022140_1280.jpg',
      description: 'A tropical plant with large, split leaves.',
    },
    {
      id: 2,
      name: 'Snake Plant',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/04/16/sansevieria-1868499_1280.jpg',
      description: 'Hardy and low-maintenance indoor plant.',
    },
  ]);

  // Remove plant by id
  const removeFromFavorites = (id: number) => {
    setFavoritePlants((prev) => prev.filter((plant) => plant.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-700 mb-8">Your Favorite Plants</h1>
      {favoritePlants.length === 0 ? (
        <p className="text-gray-600">You have no favorite plants yet. Start adding some!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {favoritePlants.map((plant) => (
            <div
              key={plant.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 relative"
            >
              <img
                src={plant.imageUrl}
                alt={plant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-green-800">{plant.name}</h2>
                <p className="text-gray-600 mt-2">{plant.description}</p>
                <button
                  onClick={() => removeFromFavorites(plant.id)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
