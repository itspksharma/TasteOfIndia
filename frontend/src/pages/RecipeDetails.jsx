import { useParams } from 'react-router-dom'

function RecipeDetails() {
  const { id } = useParams()

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      
      <h1 className="text-3xl font-bold mb-2">
        Recipe ID: {id}
      </h1>

      {/* Image */}
      <img
        src="https://via.placeholder.com/800x400"
        alt="Paneer Butter Masala"
        className="rounded-lg mb-6"
      />

      {/* Ingredients */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Ingredients
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Paneer</li>
          <li>Tomatoes</li>
          <li>Butter</li>
          <li>Cream</li>
          <li>Spices</li>
        </ul>
      </section>

      {/* Steps */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Cooking Steps
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Heat butter in a pan.</li>
          <li>Add tomato puree and spices.</li>
          <li>Add paneer cubes and cook.</li>
          <li>Add cream and simmer.</li>
        </ol>
      </section>

      {/* Embedded Video */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Video Tutorial
        </h2>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/1IszT_guI08"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Footer Info */}
      <p className="text-sm text-gray-500">
        Recipe by Admin • 2 days ago
      </p>

    </div>
  )
}

export default RecipeDetails
