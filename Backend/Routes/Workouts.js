const express = require('express')
const {
  createWorkout,
  getWorkouts,
  getWorkoutsById,
  deleteWorkout,
  updateWorkout
} = require('../Controllers/workoutController')
const requireAuth = require('../Middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkoutsById)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router