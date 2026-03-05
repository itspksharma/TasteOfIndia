function AddRecipe() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      
      <h1 className="text-3xl font-bold mb-2">
        Add New Recipe
      </h1>

      <p className="text-gray-600 mb-6">
        Share your recipe with the community.  
        All recipes are reviewed by admin before publishing.
      </p>

      <form className="space-y-5">
        
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">
            Recipe Title
          </label>
          <input
            type="text"
            placeholder="Enter recipe title"
            className="w-full border rounded px-4 py-2"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">
            Category
          </label>
          <select className="w-full border rounded px-4 py-2">
            <option>Select category</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snacks</option>
          </select>
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-medium">
            Ingredients
          </label>
          <textarea
            rows="4"
            placeholder="List ingredients (one per line)"
            className="w-full border rounded px-4 py-2"
          ></textarea>
        </div>

        {/* Steps */}
        <div>
          <label className="block mb-1 font-medium">
            Cooking Steps
          </label>
          <textarea
            rows="5"
            placeholder="Write step-by-step cooking instructions"
            className="w-full border rounded px-4 py-2"
          ></textarea>
        </div>

        {/* YouTube Link */}
        <div>
          <label className="block mb-1 font-medium">
            YouTube Video Link
          </label>
          <input
            type="text"
            placeholder="https://www.youtube.com/watch?v=..."
            className="w-full border rounded px-4 py-2"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium">
            Recipe Image
          </label>
          <input
            type="file"
            className="w-full"
          />
        </div>

        {/* Submit */}
        <button
          type="button"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Submit Recipe
        </button>

      </form>

    </div>
  )
}

export default AddRecipe
