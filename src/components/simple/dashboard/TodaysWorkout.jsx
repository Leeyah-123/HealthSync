import { PlayCircleIcon } from 'lucide-react';

const TodaysWorkout = () => {
  return (
    <div
      className="h-[350px] w-full bg-[url('/stretching.png')] bg-green bg-center text-white bg-cover bg-origin- 
    content bg-no-repeat lg:rounded-lg flex gap-2 place-items-end p-5 pb-16 max-w-full"
    >
      <div className="h-fit">
        <h3 className="text-sm lg:hidden">Today&apos;s Workout</h3>
        <h3 className="text-2xl font-semibold">Push Workout</h3>
        <p className="text-xl font-medium">45-60 mins</p>
      </div>

      <button>
        <PlayCircleIcon width={50} height={50} />
      </button>
    </div>
  );
};

export default TodaysWorkout;
