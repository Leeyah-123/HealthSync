import { Progress, Stack, Checkbox } from "@chakra-ui/react";
import { UserCircle } from "lucide-react";
import "../../App.css";
import { useState } from "react";
import profileImg from "../../../public/assets/fatMan.jpg";

const Profile = () => {
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const handleClickedHamburger = () => {
    setIsProfileClicked((prev) => !prev);
  };

  const userInfo = [
    { name: "Height", value: "185cm" },
    { name: "Weight", value: "65kg" },
    { name: "Age", value: "54" },
  ];
  const goals = [
    { name: "Sleep", max: 300, value: 100, unit: "hours" },
    { name: "Running", max: 100, value: 20, unit: "km" },
    { name: "Loose Weight", max: 6, value: 3, unit: "kg" },
  ];
  const upcomingTask = [
    { name: "Gymnastic", time: "13/10/2023 | 4:00pm", done: true },
    { name: "Running", time: "14/10/2023 | 5:00pm", done: false },
  ];

  return (
    <div className="relative">
      <section
        className={`lg:block lg:h-screen fixed  lg:static ${
          isProfileClicked ? "block w-[90vw] mx-auto left-[5%]" : "hidden "
        } h-full  bg-white rounded-[20px] shadow-md py-16 overflow-y-auto px-8`}
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
        <div className=" flex flex-col lg:flex-row gap-4 pr-2 mt-4 items-center justify-between">
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
                  {goal.value}{" "}
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

      {/* profile icon */}
      <div
        onClick={handleClickedHamburger}
        className={`text-green mt-8 ml-[20px] md:ml-[40px] cursor-pointer top-0 lg:hidden ${
          isProfileClicked ? "z-20 fixed" : "absolute"
        }`}
      >
        <UserCircle  aria-label="view profile"
        role="button" />
      </div>
    </div>
  );
};

export default Profile;
