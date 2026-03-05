function AdminReviewModal({ isOpen, onClose, recipe }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            Review Recipe
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Recipe Title */}
        <h3 className="text-xl font-semibold mb-2">
          {recipe.title}
        </h3>

        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded mb-4"
        />

        {/* Category */}
        <p className="text-sm text-gray-600 mb-4">
          Category: <strong>{recipe.category}</strong>
        </p>

        {/* Ingredients */}
        <div className="mb-4">
          <h4 className="font-semibold mb-1">Ingredients</h4>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div className="mb-4">
          <h4 className="font-semibold mb-1">Cooking Steps</h4>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Video */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Video Tutorial</h4>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded"
              src={recipe.video}
              title="Recipe Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Reject
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Approve
          </button>
        </div>

      </div>
    </div>
  )
}

export default AdminReviewModal
