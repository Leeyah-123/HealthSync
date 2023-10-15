import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
} from 'chart.js';
import faker from 'faker';
import { Tooltip } from 'flowbite-react';
import {
  BellDot,
  Calendar,
  Droplet,
  Footprints,
  Moon,
  UserCircle2,
} from 'lucide-react';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Profile from '../../components/complex/dashboard/Profile';
import Card from '../../components/simple/dashboard/Card';
import { todayDate } from '../../utils/helper';

const DashboardHome = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const toggleProfileOpen = () => setIsProfileOpen(!isProfileOpen);

  const activity = [
    { name: 'Sleep', progress: '6.3 Hours', icon: <Moon /> },
    { name: 'Water', progress: '5 Litres', icon: <Droplet /> },
    { name: 'Walking', progress: '1590 Steps', icon: <Footprints /> },
  ];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: 'rgb(205, 251, 71)',
        backgroundColor: 'rgba(205, 251, 71, 0.5)',
      },
    ],
  };

  return (
    <main className="px-5 sm:px-10 md:px-20 lg:px-0 mt-20 lg:mx-0 lg:mt-10 w-full grid lg:grid-cols-[70%_30%] gap-5">
      <section aria-label="User Dashboard">
        <div className="flex flex-row justify-between">
          <div>
            <h2 className="text-2xl lg:text-[30px] font-bold">
              Hello, Gilbert
            </h2>
            <p className=" mt-2">Keep Moving & Stay Healthy</p>
          </div>
          <div className="text-green flex gap-3 mt-2 lg:mt-0">
            <div className="hidden border-green border-2 py-2 lg:py-4 px-4 lg:px-6 rounded-[15px] lg:rounded-[20px] sm:flex items-center gap-6">
              <p>{todayDate()}</p>
              <Calendar />
            </div>
            <button
              title="View Notifications"
              className="bg-lightGreen rounded-[15px] lg:rounded-[20px] w-[60px] flex justify-center items-center"
            >
              <BellDot />
            </button>
            <button
              onClick={toggleProfileOpen}
              title="View Profile"
              className="bg-lightGreen rounded-[15px] lg:rounded-[20px] w-[60px] flex justify-center items-center lg:hidden"
            >
              <UserCircle2 />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] w-full gap-5 justify-between my-16">
          {activity.map((act, index) => (
            <Card
              key={index}
              activityName={act.name}
              activityProgress={act.progress}
              icon={act.icon}
            />
          ))}
        </div>

        <div className="grid gap-10 mx-auto lg:max-w-[95%]">
          <Line
            options={{
              ...chartOptions,
              plugins: { title: { text: 'Weight History', display: true } },
            }}
            data={data}
          />
          <Line
            options={{
              ...chartOptions,
              plugins: {
                title: { text: 'Calorie Intake History', display: true },
              },
            }}
            data={data}
          />
        </div>
      </section>

      <Profile
        isProfileOpen={isProfileOpen}
        toggleProfileOpen={toggleProfileOpen}
      />
    </main>
  );
};

export default DashboardHome;
