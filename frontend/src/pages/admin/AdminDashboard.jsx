import { useState } from 'react'
import AdminReviewModal from '../../components/AdminReviewModal'

function AdminDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sampleRecipe = {
    title: 'Paneer Butter Masala',
    category: 'Dinner',
    image: 'https://via.placeholder.com/800x400',
    ingredients: [
      'Paneer',
      'Tomatoes',
      'Butter',
      'Cream',
      'Spices',
    ],
    steps: [
      'Heat butter in a pan.',
      'Add tomato puree and spices.',
      'Add paneer cubes and cook.',
      'Add cream and simmer.',
    ],
    video: 'https://www.youtube.com/embed/1IszT_guI08',
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full border-collapse">
          
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 border-b">Recipe</th>
              <th className="text-left px-4 py-3 border-b">Category</th>
              <th className="text-left px-4 py-3 border-b">Submitted By</th>
              <th className="text-center px-4 py-3 border-b">Review</th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 border-b">
                Paneer Butter Masala
              </td>
              <td className="px-4 py-3 border-b">
                Dinner
              </td>
              <td className="px-4 py-3 border-b">
                pawan@gmail.com
              </td>
              <td className="px-4 py-3 border-b text-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>

        </table>
      </div>

      {/* Review Modal */}
      <AdminReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        recipe={sampleRecipe}
      />
    </div>
  )
}

export default AdminDashboard
