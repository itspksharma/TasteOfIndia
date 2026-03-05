import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between">
      <h1 className="text-xl font-bold text-green-600">TasteOfIndia</h1>

      <div className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>

        {user && <Link to="/add-recipe">Add Recipe</Link>}

        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <span className="text-sm text-gray-600">
              👋 {user.name}
            </span>
            <button
              onClick={handleLogout}
              className="text-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
