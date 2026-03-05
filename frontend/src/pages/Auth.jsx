/* global google */
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'




function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleGoogleLogin = (response) => {
  console.log('Google credential:', response.credential)

  // UI-only login simulation for now
  localStorage.setItem('token', 'google-demo-token')
  localStorage.setItem(
    'user',
    JSON.stringify({ name: 'Google User', role: 'user' })
  )

  navigate('/add-recipe')
}

useEffect(() => {
  
  if (window.google) {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,

      callback: handleGoogleLogin,
    })

    google.accounts.id.renderButton(
      document.getElementById('googleBtn'),
      { theme: 'outline', size: 'large' }
    )
  }
}, [])


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const url = isLogin
      ? 'http://localhost:5000/api/auth/login'
      : 'http://localhost:5000/api/auth/register'

    const payload = isLogin
      ? {
          email: formData.email,
          password: formData.password,
        }
      : formData

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.message)
        return
      }

      // login case → save token
      if (isLogin) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))

        alert('Login successful')

        // admin vs user redirect
        if (data.user.role === 'admin') {
          navigate('/admin/dashboard')
        } else {
          navigate('/add-recipe')
        }
      } else {
        alert('Registration successful, please login')
        setIsLogin(true)
      }
    } catch (error) {
      alert('Server error')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        {/* Toggle */}
        <div className="flex mb-6">
          <button
            className={`w-1/2 py-2 font-semibold ${
              isLogin
                ? 'border-b-2 border-green-600 text-green-600'
                : 'text-gray-500'
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-2 font-semibold ${
              !isLogin
                ? 'border-b-2 border-green-600 text-green-600'
                : 'text-gray-500'
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
          <div className="mt-4 flex justify-center">
          <div id="googleBtn"></div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Auth
