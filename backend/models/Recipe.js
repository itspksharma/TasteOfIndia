import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    ingredients: {
      type: [String],
      required: true,
    },

    steps: {
      type: [String],
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    videoUrl: {
      type: String,
      required: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Recipe = mongoose.model('Recipe', recipeSchema)

export default Recipe
