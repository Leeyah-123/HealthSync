import PropTypes from 'prop-types';

const WorkoutPlanInfo = ({ activeWorkout }) => {
  return (
    <div className="shadow-md rounded-lg gap-2 p-5 h-full">
      <h3 className="text-xl font-semibold text-center">
        {activeWorkout?.name}
      </h3>
      <hr />
      <p className="p-2">{activeWorkout?.description}</p>
    </div>
  );
};

WorkoutPlanInfo.propTypes = {
  activeWorkout: PropTypes.object,
};

export default WorkoutPlanInfo;
