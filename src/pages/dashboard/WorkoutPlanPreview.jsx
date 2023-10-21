import { Skeleton, useToast } from '@chakra-ui/react';
import {
  ArrowLeftIcon,
  ClipboardCheckIcon,
  Clock5Icon,
  PlayIcon,
} from 'lucide-react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { workoutPlannerRequests } from '../../utils/apiRequests/workout-planner.requests';

const Exercise = ({ name, description }) => {
  return (
    <div className="p-3 shadow-md rounded-md">
      <h4 className="capitalize text-lg font-semibold">{name}</h4>
      <p className="font-thin text-sm">{description}</p>
    </div>
  );
};

Exercise.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const WorkoutPlan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const [loading, setLoading] = useState(false);

  const [workoutPlan, setWorkoutPlan] = useState();

  const routines = [];
  for (let i in workoutPlan?.routine?.routine)
    routines.push([i, workoutPlan?.routine?.routine[i]]);

  useEffect(() => {
    async function fetchWorkoutPlan() {
      setLoading(true);
      const response = await workoutPlannerRequests().getWorkoutPlanById(id);
      setLoading(false);

      if (!response.success)
        return toast({ title: response.data, status: 'error' });

      setWorkoutPlan(response.data);
    }

    fetchWorkoutPlan();
  }, [id, toast]);

  return (
    <>
      <div className="bg-lemon fixed top-0 right-0 left-0 lg:hidden bottom-auto p-3 z-0">
        <button title="Go back" onClick={() => navigate(-1)}>
          <ArrowLeftIcon color="white" />
        </button>
      </div>

      <div className="flex flex-col mx-auto place-items-center">
        <header className="mb-5 text-center">
          <h3 className="text-2xl font-medium">{workoutPlan?.routine?.name}</h3>
          <p className="flex gap-1 text-sm font-extralight justify-center">
            {' '}
            <Clock5Icon width="20px" height="20px" />
            {workoutPlan?.routine?.duration} minutes
          </p>
        </header>
        <div className="flex gap-3">
          <button className="flex py-2 px-2.5 bg-lemon text-white rounded-md hover:scale-105 transition-transform">
            <PlayIcon fill="white" /> Do It
          </button>
          <button className="flex py-2 px-2.5 border border-green rounded-md hover:scale-105 transition-transform">
            <ClipboardCheckIcon /> Log It
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-5 w-full px-10 sm:px-15 md:px-20 lg:px-32">
          <h3 className="text-xl font-bold">Exercises:</h3>
          {loading ? (
            <div className="flex flex-col gap-3">
              <Skeleton height="30px" />
              <Skeleton height="30px" />
              <Skeleton height="30px" />
            </div>
          ) : (
            <div>
              {routines?.map((routine, index) => (
                <Exercise
                  key={index}
                  name={routine[0]}
                  description={routine[1].description}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkoutPlan;
