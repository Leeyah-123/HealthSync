import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import WorkoutCard from '../../simple/dashboard/WorkoutCard';

const WorkoutSchedule = () => {
  return (
    <Tabs colorScheme="green" className="mt-2" defaultIndex={1} isFitted>
      <TabList>
        <Tab>Last Week</Tab>
        <Tab>This Week</Tab>
        <Tab>Next Week</Tab>
      </TabList>

      <TabPanels className="overflow-y-scroll max-h-[80vh]">
        <TabPanel className="flex flex-col gap-2">
          <WorkoutCard
            day="Mon"
            name="Push Workout"
            date={new Date('1999-01-01')}
          />
          <WorkoutCard
            day="Tue"
            name="Push Workout"
            date={new Date('1999-01-01')}
          />
          <WorkoutCard
            day="Wed"
            name="Push Workout"
            date={new Date('1999-01-01')}
          />
          <WorkoutCard
            day="Thu"
            name="Push Workout"
            date={new Date('2020-02-02')}
          />
          <WorkoutCard
            day="Fri"
            name="Push Workout"
            date={new Date('2020-02-02')}
          />
          <WorkoutCard
            day="Sat"
            name="Push Workout"
            date={new Date('2020-02-02')}
          />
          <WorkoutCard
            day="Sun"
            name="Push Workout"
            date={new Date('2020-02-02')}
          />
        </TabPanel>
        <TabPanel className="flex flex-col gap-2">
          <WorkoutCard day="Mon" name="Push Workout" date={new Date()} />
          <WorkoutCard
            day="Tue"
            name="Push Workout"
            date={new Date('2024-02-02')}
          />
          <WorkoutCard
            day="Wed"
            name="Push Workout"
            date={new Date('2024-02-02')}
          />
          <WorkoutCard
            day="Thu"
            name="Push Workout"
            date={new Date('2024-02-02')}
          />
          <WorkoutCard
            day="Fri"
            name="Push Workout"
            date={new Date('2024-02-02')}
          />
          <WorkoutCard
            day="Sat"
            name="Push Workout"
            date={new Date('2024-02-02')}
          />
          <WorkoutCard
            day="Sun"
            name="Push Workout"
            date={new Date('2024-02-02')}
          />
        </TabPanel>
        <TabPanel className="flex flex-col gap-2">
          <WorkoutCard
            day="Mon"
            name="Push Workout"
            date={new Date('2024-02-02')}
          />
          <WorkoutCard
            day="Tue"
            name="Push Workout"
            date={new Date('2024-02-02')}
          />
          <WorkoutCard
            day="Wed"
            name="Push Workout"
            date={new Date('2024-02-02')}
          />
          <WorkoutCard
            day="Thu"
            name="Push Workout"
            date={new Date('2024-02-02')}
          />
          <WorkoutCard
            day="Fri"
            name="Push Workout"
            date={new Date('2024-02-02')}
          />
          <WorkoutCard
            day="Sat"
            name="Push Workout"
            date={new Date('2024-02-02')}
          />
          <WorkoutCard
            day="Sun"
            name="Push Workout"
            date={new Date('2024-02-02')}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default WorkoutSchedule;
