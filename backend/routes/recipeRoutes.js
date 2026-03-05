import express from 'express'
import {
  addRecipe,
  getApprovedRecipes,
  getRecipeById,
} from '../controllers/recipeController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

// protected – only logged-in users
router.post('/', protect, addRecipe)

// public
router.get('/', getApprovedRecipes)
router.get('/:id', getRecipeById)

export default router
