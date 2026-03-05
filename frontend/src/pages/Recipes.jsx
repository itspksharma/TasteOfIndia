import RecipeCard from '../components/RecipeCard'

function Recipes() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          All Recipes
        </h1>
        <p className="text-gray-600">
          Explore vegetarian recipes shared by our community
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search recipes..."
          className="border rounded px-4 py-2 w-full sm:w-1/2"
        />

        <select className="border rounded px-4 py-2 w-full sm:w-1/4">
          <option>All Categories</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snacks</option>
        </select>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <RecipeCard
          id ="1"
          title="Paneer Butter Masala"
          description="Creamy, rich and restaurant-style paneer recipe."
          image="https://via.placeholder.com/400x300"
        />

        <RecipeCard
          id ="2"
          title="Veg Biryani"
          description="Aromatic rice cooked with vegetables & spices."
          image="https://via.placeholder.com/400x300"
        />

        <RecipeCard
          id ="3"
          title="Masala Dosa"
          description="Crispy dosa filled with spicy potato masala."
          image="https://via.placeholder.com/400x300"
        />

        <RecipeCard
          id ="4"
          title="Chole Bhature"
          description="Spicy chickpeas served with fluffy bhature."
          image="https://via.placeholder.com/400x300"
        />
      </div>

    </div>
  )
}

export default Recipes
