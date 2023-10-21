import { useToast } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import CreateWorkoutPlan from '../../components/complex/dashboard/CreateWorkoutPlan';
import WorkoutPlanOverview from '../../components/complex/dashboard/WorkoutPlanOverview';
import { WorkoutContext } from '../../contexts/WorkoutContext';
import { workoutPlannerRequests } from '../../utils/apiRequests/workout-planner.requests';

const WorkoutPlanner = () => {
  const { activeWorkout, setActiveWorkout } = useContext(WorkoutContext);
  const toast = useToast();

  useEffect(() => {
    // fetch active workout
    async function fetchActiveWorkout() {
      const response = await workoutPlannerRequests().getActiveWorkoutPlan();
      if (!response.success) {
        if (response.message !== 'No active workout found')
          toast({ title: response.message, status: 'error' });
      } else {
        setActiveWorkout(response.data);
      }
    }

    fetchActiveWorkout();
  }, [setActiveWorkout, toast]);

  return activeWorkout ? (
    <WorkoutPlanOverview activeWorkout={activeWorkout} />
  ) : (
    <CreateWorkoutPlan />
  );
};

export default WorkoutPlanner;
