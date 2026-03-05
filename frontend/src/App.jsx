import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './routes/ProtectedRoute'

import Home from './pages/Home'
import Recipes from './pages/Recipes'
import RecipeDetails from './pages/RecipeDetails'
import AddRecipe from './pages/AddRecipe'
import Auth from './pages/Auth'
import AdminDashboard from './pages/admin/AdminDashboard'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/login" element={<Auth />} />

        {/* PROTECTED USER ROUTE */}
        <Route
          path="/add-recipe"
          element={
            <ProtectedRoute>
              <AddRecipe />
            </ProtectedRoute>
          }
        />

        {/* PROTECTED ADMIN ROUTE (login only for now) */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
