import express from 'express'
import {
  getPendingRecipes,
  approveRecipe,
  deleteRecipe,
} from '../controllers/adminController.js'

import { protect } from '../middleware/authMiddleware.js'
import { adminOnly } from '../middleware/adminMiddleware.js'

const router = express.Router()

// admin only
router.get('/recipes/pending', protect, adminOnly, getPendingRecipes)
router.put('/recipes/:id/approve', protect, adminOnly, approveRecipe)
router.delete('/recipes/:id', protect, adminOnly, deleteRecipe)

export default router
