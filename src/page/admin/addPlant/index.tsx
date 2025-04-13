import { useState } from 'react';

function AdminAddPlant() {
  const [plantData, setPlantData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    images: ['', '', '', ''], 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
    const { name, value } = e.target;
    if (name === 'images' && typeof index === 'number') {
      const updatedImages = [...plantData.images];
      updatedImages[index] = value;
      setPlantData({ ...plantData, images: updatedImages });
    } else {
      setPlantData({ ...plantData, [name]: value });
    }
  };

  const handleAddImageField = () => {
    setPlantData({ ...plantData, images: [...plantData.images, ''] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Plant Submitted:', plantData);
    // You can integrate an API call here
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">🌿 Add New Plant</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-6 space-y-6"
      >
        <div>
          <label className="block font-medium mb-1 text-gray-700">Plant Name</label>
          <input
            type="text"
            name="name"
            value={plantData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 outline-none focus:ring-2 ring-green-300"
            placeholder="e.g., Monstera Deliciosa"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">Price ($)</label>
          <input
            type="number"
            name="price"
            value={plantData.price}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 outline-none focus:ring-2 ring-green-300"
            placeholder="e.g., 29.99"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={plantData.category}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 outline-none focus:ring-2 ring-green-300"
            placeholder="e.g., Indoor, Succulent"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">Description</label>
          <textarea
            name="description"
            value={plantData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border rounded-lg p-2 outline-none focus:ring-2 ring-green-300"
            placeholder="Short description about the plant"
          />
        </div>

        <div>
          <label className="block font-medium mb-2 text-gray-700">Images (min 4)</label>
          {plantData.images.map((img, index) => (
            <input
              key={index}
              type="text"
              name="images"
              value={img}
              onChange={(e) => handleChange(e, index)}
              required
              className="mb-2 w-full border rounded-lg p-2 outline-none focus:ring-2 ring-green-300"
              placeholder={`Image URL ${index + 1}`}
            />
          ))}
          <button
            type="button"
            onClick={handleAddImageField}
            className="text-sm text-green-700 underline mt-2"
          >
            + Add more images
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition"
        >
          Add Plant
        </button>
      </form>
    </div>
  );
}

export default AdminAddPlant;
