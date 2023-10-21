import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

//? initial auth state
const initialState = {
  workouts: null,
  routines: null,
  activeWorkout: null,
  setActiveWorkout: () => null,
  setWorkouts: () => null,
  setRoutines: () => null,
};

//? declaration of workout context
export const WorkoutContext = createContext(initialState);

export default function WorkoutContextContainer({ children }) {
  const [workouts, setWorkouts] = useState(null);
  const [routines, setRoutines] = useState(null);
  const [activeWorkout, setActiveWorkout] = useState(null);

  //? declaring value that will be passed down the app through the AuthContext's provider.
  const workoutContextValue = {
    workouts,
    routines,
    activeWorkout,
    setActiveWorkout,
    setWorkouts,
    setRoutines,
  };

  return (
    <WorkoutContext.Provider value={workoutContextValue}>
      {children}
    </WorkoutContext.Provider>
  );
}

WorkoutContextContainer.propTypes = {
  children: PropTypes.element,
};
