import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  useToast,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { WorkoutContext } from '../../../contexts/WorkoutContext';
import { workoutPlannerRequests } from '../../../utils/apiRequests/workout-planner.requests';
import FinalWorkoutPlanDetails from '../../simple/dashboard/workout-planner/FinalWorkoutPlanDetails';
import PrimaryGoalsForm from '../../simple/dashboard/workout-planner/PrimaryGoalsForm';
import WorkoutRoutines from '../workout-planner/WorkoutRoutines';

const steps = [
  { title: 'First', description: 'Primary Goals' },
  { title: 'Second', description: 'Select/Create routine' },
  { title: 'Third', description: 'Final Details' },
];

const WorkoutPlanOverview = () => {
  const toast = useToast();
  const workoutContext = useContext(WorkoutContext);

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const [tabsOrientation, setTabsOrientation] = useState('horizontal');

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth > '1024'
        ? setTabsOrientation('vertical')
        : setTabsOrientation('horizontal');
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener('resize', handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleTabsOrientation);
  }, [tabsOrientation]);

  const [loading, setLoading] = useState(false);
  const [preferences, setPreferences] = useState({
    PRIMARY_GOAL: '',
    WORKOUT_TYPE: '',
    ROUTINE_FOCUS: '',
    STRENGTH_LEVEL: '',
  });
  const [selectedRoutine, setSelectedRoutine] = useState();
  const [details, setDetails] = useState({
    name: '',
    description: '',
    trainingDays: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'],
    startDate: '',
    endDate: '',
  });

  const completeWorkoutPlanCreation = async (e) => {
    e.preventDefault();

    if (
      !details.name ||
      !details.description ||
      details.trainingDays.length === 0 ||
      !details.startDate ||
      !details.endDate
    )
      return toast({
        title: 'Please fill in all fields',
        status: 'error',
      });

    setLoading(true);
    const response = await workoutPlannerRequests().createWorkoutPlan({
      name: details.name,
      description: details.description,
      trainingDays: details.trainingDays,
      routineId: selectedRoutine,
      startDate: details.startDate,
      endDate: details.endDate,
    });
    setLoading(false);

    if (!response.success) {
      return toast({ title: response.message, status: 'error' });
    }

    workoutContext.setActiveWorkout(response.data);
    toast({ title: 'Workout Plan Created Successfully', status: 'success' });
  };

  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-0 lg:mx-0 w-full gap-5">
      <header className="w-full h-max">
        <h2 className="block text-2xl font-semibold mb-2">
          Create Workout Plan
        </h2>
      </header>

      {/* Stepper */}
      <div className="mt-5 lg:flex lg:gap-5 lg:min-h-[80vh]">
        <Stepper index={activeStep} orientation={tabsOrientation}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>

        {/* Stepper content */}
        <section>
          {activeStep === 1 && (
            <PrimaryGoalsForm
              preferences={preferences}
              setPreferences={setPreferences}
              setActiveStep={setActiveStep}
            />
          )}
          {activeStep === 2 && (
            <WorkoutRoutines
              preferences={preferences}
              selectedRoutine={selectedRoutine}
              setSelectedRoutine={setSelectedRoutine}
              setActiveStep={setActiveStep}
            />
          )}
          {activeStep === 3 && (
            <FinalWorkoutPlanDetails
              details={details}
              setDetails={setDetails}
              handleSubmit={completeWorkoutPlanCreation}
              loading={loading}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default WorkoutPlanOverview;
