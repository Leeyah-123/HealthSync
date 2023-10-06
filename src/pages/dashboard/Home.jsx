import Card from "../../components/dashboard/Card";
import Profile from "../../components/dashboard/Profile";
import { todayDate } from "../../helpers/helper";
import { Calendar, BellDot, Moon, Droplet, Footprints } from "lucide-react";

const Home = () => {
  const activity = [
    { name: "Sleep", progress: "6.3 Hours", icon: <Moon /> },
    { name: "Water", progress: "5 Litres", icon: <Droplet /> },
    { name: "Walking", progress: "1590 Steps", icon: <Footprints /> },
  ];

  return (
    <main className="mt-14 mx-auto lg:mx-0 lg:mt-10 flex gap-8 justify-between w-[90%]">
      <div className=" w-[75%] lg:w-[70%]">
        <div className=" flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl lg:text-[30px] font-bold">
              Hello, Gilbert
            </h2>
            <p className="text-lightGray3 mt-2">Keep Moving & Stay Healthy</p>
          </div>
          <div className="text-green flex gap-6 mt-2 lg:mt-0">
            <div className="border-green border-2 py-2 lg:py-4 px-4 lg:px-6 rounded-[15px] lg:rounded-[20px] flex items-center gap-6">
              <p>{todayDate()}</p>
              <Calendar />
            </div>
            <div
              aria-label="notifications"
              className="bg-lightGreen rounded-[15px] lg:rounded-[20px] w-[60px]  flex justify-center items-center cursor-pointer"
            >
              <BellDot />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between my-16">
          {activity.map((act, index) => (
            <Card
              key={index}
              activityName={act.name}
              activityProgress={act.progress}
              icon={act.icon}
            />
          ))}
        </div>
      </div>
      <div className="w-[15%] lg:w-[28%]">
        <Profile />
      </div>
    </main>
  );
};

export default Home;
