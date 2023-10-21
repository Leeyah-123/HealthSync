import { Skeleton, Stack, useToast } from '@chakra-ui/react';
import { PlusIcon } from 'lucide-react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { workoutPlannerRequests } from '../../../utils/apiRequests/workout-planner.requests';
import RoutineCard from '../../simple/dashboard/RoutineCard';

const WorkoutRoutines = ({
  preferences,
  selectedRoutine,
  setSelectedRoutine,
  setActiveStep,
}) => {
  const toast = useToast();
  const [routines, setRoutines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = () => {
    if (!selectedRoutine)
      return toast({ title: 'Please select workout routine', status: 'error' });

    setActiveStep(3);
  };

  const createWorkoutRoutine = () => {
    toast({ title: 'Not yet implemented', status: 'error' });
  };

  useEffect(() => {
    async function fetchRoutines() {
      const response = await workoutPlannerRequests().getRoutinesByPreferences(
        preferences
      );
      setIsLoading(false);
      if (!response.success)
        return toast({ title: response.message, status: 'error' });

      setRoutines(response.data);
    }

    fetchRoutines();
  }, [preferences, toast]);

  return (
    <section className="mt-6">
      <h2 className="text-center text-xl">Select a routine or create one</h2>

      <div className="mt-3 grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-5">
        <button
          onClick={createWorkoutRoutine}
          className="w-full flex justify-center items-center gap-3 h-60 text-lg font-medium bg-lemon rounded-lg text-center"
        >
          Create Workout Routine <PlusIcon height={30} />
        </button>
        {isLoading ? (
          <Stack>
            <Skeleton height="full" />
            <Skeleton height="full" />
            <Skeleton height="full" />
            <Skeleton height="full" />
          </Stack>
        ) : (
          routines.map((routine) => (
            <RoutineCard
              key={routine.id}
              routine={routine}
              selectedRoutine={selectedRoutine}
              setSelectedRoutine={setSelectedRoutine}
            />
          ))
        )}
      </div>

      <button
        className="w-full mt-5 bg-[#CDFB47] py-2 rounded-md disabled:opacity-50"
        onClick={handleSubmit}
      >
        Continue
      </button>
    </section>
  );
};

WorkoutRoutines.propTypes = {
  preferences: PropTypes.array.isRequired,
  selectedRoutine: PropTypes.string.isRequired,
  setSelectedRoutine: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired,
};

export default WorkoutRoutines;
