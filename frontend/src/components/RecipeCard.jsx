import { Link } from 'react-router-dom'

function RecipeCard({ id, title, description, image }) {
  return (
    <Link to={`/recipes/${id}`}>
      <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
        
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>

      </div>
    </Link>
  )
}

export default RecipeCard
