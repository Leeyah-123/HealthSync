import { ClipboardCheckIcon, Clock5Icon, PlayIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

const WorkoutPlan = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="lg:mt-10 flex flex-col mx-auto">
      <header>
        <h3>Pull Workout</h3>
        <p>
          {' '}
          <Clock5Icon />
          45 minutes
        </p>
      </header>
      <div className="flex">
        <button className="flex">
          <PlayIcon /> Do It
        </button>
        <button className="flex">
          <ClipboardCheckIcon /> Log It
        </button>
      </div>
    </div>
  );
};

export default WorkoutPlan;
