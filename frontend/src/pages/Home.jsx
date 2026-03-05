import RecipeCard from '../components/RecipeCard'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-700">
            TasteOfIndia 🍲
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Discover & share authentic vegetarian recipes from across India
          </p>
          <p className="mt-2 text-gray-600">
            Learn cooking step-by-step with images and embedded videos
          </p>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">
          Featured Recipes
        </h2>

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
        </div>
      </section>
    </div>
  )
}

export default Home
