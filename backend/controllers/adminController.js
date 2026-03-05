import Recipe from '../models/Recipe.js'

/**
 * @desc    Get all pending recipes
 * @route   GET /api/admin/recipes/pending
 * @access  Admin
 */
export const getPendingRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ approved: false })
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 })

    res.json(recipes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

/**
 * @desc    Approve a recipe
 * @route   PUT /api/admin/recipes/:id/approve
 * @access  Admin
 */
export const approveRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id)

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' })
    }

    recipe.approved = true
    await recipe.save()

    res.json({ message: 'Recipe approved' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

/**
 * @desc    Reject (delete) a recipe
 * @route   DELETE /api/admin/recipes/:id
 * @access  Admin
 */
export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id)

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' })
    }

    await recipe.deleteOne()

    res.json({ message: 'Recipe rejected and deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
