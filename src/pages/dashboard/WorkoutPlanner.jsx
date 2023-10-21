import { useContext, useEffect } from 'react';
import WorkoutPlanOverview from '../../components/complex/dashboard/WorkoutPlanOverview';
import { WorkoutContext } from '../../contexts/WorkoutContext';
import CreateWorkoutPlan from '../../components/complex/dashboard/CreateWorkoutPlan';

const WorkoutPlanner = () => {
  const { activeWorkout } = useContext(WorkoutContext);

  useEffect(() => {
    // fetch active workout
  }, []);

  return activeWorkout ? <WorkoutPlanOverview /> : <CreateWorkoutPlan />;
};

export default WorkoutPlanner;
