import { PlayIcon } from 'lucide-react';

const TodaysWorkout = ({ activeWorkout }) => {
  return (
    <div
      className="h-[350px] w-full bg-[url('/stretching.png')] bg-green bg-center text-white bg-cover bg-origin- 
    content bg-no-repeat lg:rounded-lg flex justify-between place-items-end px-5 pb-16 lg:pb-5 max-w-full"
    >
      <div className="h-fit">
        <h3 className="text-sm lg:hidden">Today&apos;s Workout</h3>
        <h3 className="text-2xl font-semibold">
          {activeWorkout?.routine?.name}
        </h3>
        <p className="text-xl font-medium">
          {activeWorkout?.routine?.duration} mins
        </p>
      </div>

      <button className="bg-white/90 rounded-full p-2">
        <PlayIcon
          stroke="#000000"
          fill="#000000"
          opacity={0.9}
          width={50}
          height={50}
        />
      </button>
    </div>
  );
};

export default TodaysWorkout;
