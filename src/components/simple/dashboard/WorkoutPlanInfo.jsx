import PropTypes from 'prop-types';

const WorkoutPlanInfo = ({ workoutPlan }) => {
  return (
    <div className="shadow-md rounded-lg gap-2 p-5 h-full">
      <h3 className="text-xl font-semibold text-center">Metallicadpa PPL</h3>
      <hr />
      <p className="p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        labore reprehenderit corrupti obcaecati autem sunt ipsum libero laborum
        laboriosam, ut porro. Doloremque eaque placeat quia hic consectetur quod
        veniam asperiores! Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Inventore, quos dicta esse eius consequuntur autem distinctio est
        deleniti necessitatibus! Fugit voluptatem eligendi libero recusandae
        temporibus non praesentium quibusdam? Fugiat, dolore?
      </p>
    </div>
  );
};

WorkoutPlanInfo.propTypes = {
  workoutPlan: PropTypes.object,
};

export default WorkoutPlanInfo;
