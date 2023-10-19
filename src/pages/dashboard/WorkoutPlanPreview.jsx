import {
  ArrowLeftIcon,
  ClipboardCheckIcon,
  Clock5Icon,
  PlayIcon,
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const Exercise = ({ name, description }) => {
  return (
    <div className="p-3 shadow-md rounded-md">
      <h4 className="capitalize text-lg font-semibold">{name}</h4>
      <p className="font-thin text-sm">{description}</p>
    </div>
  );
};

const WorkoutPlan = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const routines = [
    { name: 'Deadlift', description: 'Lift something up, then die' },
    {
      name: 'Lat Pulldown',
      description: 'Pull a lat down...or something like that',
    },
    {
      name: 'Press Up',
      description: 'Press Something up...menene menene',
    },
  ];

  return (
    <>
      <div className="bg-lemon fixed top-0 right-0 left-0 lg:hidden bottom-auto p-3 z-0">
        <button title="Go back" onClick={() => navigate(-1)}>
          <ArrowLeftIcon color="white" />
        </button>
      </div>

      <div className="flex flex-col mx-auto place-items-center">
        <header className="mb-5 text-center">
          <h3 className="text-2xl font-medium">Pull Workout</h3>
          <p className="flex gap-1 text-sm font-extralight justify-center">
            {' '}
            <Clock5Icon width="20px" height="20px" />
            45 minutes
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
          <div>
            {routines.map(({ name, description }, index) => (
              <Exercise key={index} name={name} description={description} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutPlan;
