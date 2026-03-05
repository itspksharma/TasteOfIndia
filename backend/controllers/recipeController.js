import Recipe from '../models/Recipe.js'

/**
 * @desc    Add new recipe (user)
 * @route   POST /api/recipes
 * @access  Public (will protect later)
 */
export const addRecipe = async (req, res) => {
  try {
    const {
      title,
      category,
      ingredients,
      steps,
      imageUrl,
      videoUrl,
    } = req.body

    const recipe = new Recipe({
      title,
      category,
      ingredients,
      steps,
      imageUrl,
      videoUrl,
      createdBy: req.user._id, // 🔒 secure
      approved: false,
    })

    await recipe.save()

    res.status(201).json({
      message: 'Recipe submitted for review',
      recipe,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


/**
 * @desc    Get all approved recipes
 * @route   GET /api/recipes
 * @access  Public
 */
export const getApprovedRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ approved: true }).sort({
      createdAt: -1,
    })

    res.json(recipes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

/**
 * @desc    Get single recipe by ID
 * @route   GET /api/recipes/:id
 * @access  Public
 */
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate(
      'createdBy',
      'name email'
    )

    if (!recipe || !recipe.approved) {
      return res.status(404).json({ message: 'Recipe not found' })
    }

    res.json(recipe)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
