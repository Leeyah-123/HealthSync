import WorkoutSchedule from '../../compound/dashboard/WorkoutSchedule';
import TodaysWorkout from '../../simple/dashboard/TodaysWorkout';
import WorkoutPlanInfo from '../../simple/dashboard/WorkoutPlanInfo';

const WorkoutPlanOverview = ({ activeWorkout }) => {
  return (
    <div className="w-full lg:mx-0 -mt-20 lg:mt-0 gap-5">
      <div className="flex flex-col lg:flex-row pb-10">
        <section className="w-full h-max">
          <h2 className="hidden text-2xl font-semibold mb-2 lg:block">
            Today&apos;s Workout
          </h2>
          <div className="h-full flex flex-col gap-4 lg:w-[90%] xl:w-[80%]">
            <TodaysWorkout activeWorkout={activeWorkout} />
            <div className="hidden lg:block">
              <h3 className="text-2xl font-semibold mb-2">Plan Info</h3>
              <WorkoutPlanInfo activeWorkout={activeWorkout} />
            </div>
          </div>
        </section>
        <section className="w-[95%] mx-auto bg-white p-5 -mt-10 lg:mt-0 lg:bg-transparent shadow-lg rounded-lg lg:rounded-none lg:shadow-none lg:w-full h-max">
          <h2 className="hidden text-2xl font-semibold mb-2 lg:block">
            Workout Schedule
          </h2>
          <h2 className="text-2xl font-semibold mb-2 lg:hidden">
            {activeWorkout?.name}
          </h2>
          <hr />
          <WorkoutSchedule activeWorkout={activeWorkout} />
        </section>
      </div>
    </div>
  );
};

export default WorkoutPlanOverview;
