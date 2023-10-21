import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

//? initial workout context state
const initialState = {
  activeWorkout: null,
  setActiveWorkout: () => null,
};

//? declaration of workout context
export const WorkoutContext = createContext(initialState);

export default function WorkoutContextContainer({ children }) {
  const [activeWorkout, setActiveWorkout] = useState(null);

  //? declaring value that will be passed down the app through the WorkoutContext's provider.
  const workoutContextValue = {
    activeWorkout,
    setActiveWorkout,
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
