import { Checkbox, Progress } from '@chakra-ui/react';
import { XIcon } from 'lucide-react';
import PropTypes from 'prop-types';
import profileImg from '/assets/fatMan.jpg';

const Profile = ({ isProfileOpen, toggleProfileOpen }) => {
  const userInfo = [
    { name: 'Height', value: '185cm' },
    { name: 'Weight', value: '65kg' },
    { name: 'Age', value: '54' },
  ];
  const goals = [
    { name: 'Sleep', max: 300, value: 100, unit: 'hours' },
    { name: 'Running', max: 100, value: 20, unit: 'km' },
    { name: 'Loose Weight', max: 6, value: 3, unit: 'kg' },
  ];
  const upcomingTask = [
    { name: 'Gymnastic', time: '13/10/2023 | 4:00pm', done: true },
    { name: 'Running', time: '14/10/2023 | 5:00pm', done: false },
  ];

  return (
    <div className="relative">
      <section
        className={`lg:block h-full fixed inset-0 lg:static lg:h-fit bg-white rounded-[20px] shadow-md py-16 overflow-y-auto px-8 ${
          isProfileOpen ? 'block w-full' : 'hidden'
        }`}
      >
        <div className="text-center">
          <img
            src={profileImg}
            className="rounded-[20px] w-[160px] h-[150px] mx-auto"
            alt="profile-image"
          />
          <h2 className="font-bold mt-6 text-xl">Rodney Gilbert</h2>
          <p className="text-lemon mt-2">Athletic Coach</p>
        </div>
        <div className="flex gap-4 pr-2 mt-4 justify-center min-w-fit flex-wrap xl:flex-nowrap xl:justify-evenly xl:gap-0">
          {userInfo.map((info, index) => (
            <div key={index}>
              <p className="text-xs font-bold text-center">{info.name}</p>
              <div className="w-[95px] py-2 bg-lemon text-white mt-2 rounded-[10px] text-center">
                {info.value}
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="font-bold mt-6">Monthly Goals</h2>
          {goals.map((goal, index) => (
            <div className="flex flex-col mt-6" key={index}>
              <div className="flex justify-between items-center text-sm font-bold">
                <h3 className="mb-2">{goal.name}</h3>
                <p>
                  {goal.value}{' '}
                  <span className="text-lightGray3 font-normal">
                    / {goal.max} {goal.unit}
                  </span>
                </p>
              </div>
              <Progress
                colorScheme="green"
                borderRadius="20px"
                size="md"
                max={goal.max}
                value={goal.value}
              />
            </div>
          ))}
        </div>

        <div className="text-sm">
          <h2 className="font-bold mt-6">Upcoming Tasks</h2>

          {upcomingTask.map((task, index) => (
            <div
              key={index}
              className="bg-[#F6F4F4] w-full mt-4 py-2  rounded-[20px]  flex items-center"
            >
              <div className="border-l-[8px] border-lemon  py-2 pl-8 pr-6 w-full rounded-[10px] flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{task.name}</h3>
                  <p className="text-lightGray3">{task.time}</p>
                </div>
                <div>
                  <Checkbox
                    colorScheme="green"
                    defaultChecked={task.done}
                  ></Checkbox>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* close profile icon */}
      <div
        onClick={toggleProfileOpen}
        className={`text-green mt-8 cursor-pointer top-0 right-5 lg:hidden ${
          isProfileOpen ? 'z-20 fixed' : 'hidden'
        }`}
      >
        <XIcon aria-label="view profile" role="button" />
      </div>
    </div>
  );
};

Profile.propTypes = {
  isProfileOpen: PropTypes.bool.isRequired,
  toggleProfileOpen: PropTypes.func.isRequired,
};

export default Profile;
