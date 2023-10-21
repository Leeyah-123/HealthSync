import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import WorkoutCard from '../../simple/dashboard/WorkoutCard';

const WorkoutSchedule = ({ activeWorkout }) => {
  return (
    <Tabs colorScheme="green" className="mt-2" defaultIndex={1} isFitted>
      <TabList>
        <Tab>Last Week</Tab>
        <Tab>This Week</Tab>
        <Tab>Next Week</Tab>
      </TabList>

      <TabPanels className="overflow-y-scroll max-h-[80vh]">
        <TabPanel className="flex flex-col gap-2">
          {activeWorkout?.trainingDays.map((trainingDay, index) => (
            <WorkoutCard
              id={activeWorkout?.id}
              key={index}
              day={trainingDay}
              name={activeWorkout?.name}
              date={new Date('1999-01-01')}
            />
          ))}
        </TabPanel>
        <TabPanel className="flex flex-col gap-2">
          {activeWorkout?.trainingDays.map((trainingDay, index) => (
            <WorkoutCard
              id={activeWorkout?.id}
              key={index}
              day={trainingDay}
              name={activeWorkout?.name}
              date={new Date('1999-01-01')}
            />
          ))}
        </TabPanel>
        <TabPanel className="flex flex-col gap-2">
          {activeWorkout?.trainingDays.map((trainingDay, index) => (
            <WorkoutCard
              id={activeWorkout?.id}
              key={index}
              day={trainingDay}
              name={activeWorkout?.name}
              date={new Date('1999-01-01')}
            />
          ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default WorkoutSchedule;
