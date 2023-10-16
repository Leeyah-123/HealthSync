import PropTypes from 'prop-types';

const Card = ({ activityName, activityProgress, icon }) => {
  return (
    <>
      <div className="flex justify-between bg-greenGradient px-8 py-8 h-[150px] rounded-[20px] text-white">
        <div>
          <p className="text-xl md:text-lg lg:text-2xl mb-4">
            {activityProgress}
          </p>
          <p>{activityName}</p>
        </div>
        <div className="bg-green flex justify-center items-center p-2 w-[50px] h-[50px] rounded-[15px]">
          {icon}
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  activityName: PropTypes.string.isRequired,
  activityProgress: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Card;
