import { useFieldArray, useForm } from 'react-hook-form';

type PlantFormData = {
  name: string;
  price: string;
  category: string;
  description: string;
  images: { url: string }[];
};

function AdminAddPlant() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PlantFormData>({
    defaultValues: {
      name: '',
      price: '',
      category: '',
      description: '',
      images: [{ url: '' }, { url: '' }, { url: '' }]
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'images',
  });

  const onSubmit = (data: PlantFormData) => {
    const formattedData = {
      ...data,
      images: data.images.map((img) => img.url),
    };
    console.log('Plant Submitted:', formattedData);
    // You can integrate an API call here
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">🌿 Add New Plant</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-2xl p-6 space-y-6"
      >
        <div>
          <label className="block font-medium mb-1 text-gray-700">Plant Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="w-full border rounded-lg p-2 outline-none focus:ring-2 ring-green-300"
            placeholder="e.g., Monstera Deliciosa"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">Price ($)</label>
          <input
            type="number"
            {...register('price', { required: 'Price is required' })}
            className="w-full border rounded-lg p-2 outline-none focus:ring-2 ring-green-300"
            placeholder="e.g., 29.99"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">Category</label>
          <input
            {...register('category', { required: 'Category is required' })}
            className="w-full border rounded-lg p-2 outline-none focus:ring-2 ring-green-300"
            placeholder="e.g., Indoor, Succulent"
          />
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">Description</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            rows={4}
            className="w-full border rounded-lg p-2 outline-none focus:ring-2 ring-green-300"
            placeholder="Short description about the plant"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-2 text-gray-700">Images (min 3)</label>
          {fields.map((field, index) => (
            <div key={field.id} className="mb-2">
              <input
                {...register(`images.${index}.url`, {
                  required: 'Image URL is required',
                })}
                className="w-full border rounded-lg p-2 outline-none focus:ring-2 ring-green-300"
                placeholder={`Image URL ${index + 1}`}
              />
              {errors.images?.[index]?.url && (
                <p className="text-red-500 text-sm">{errors.images[index]?.url?.message}</p>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ url: '' })}
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
