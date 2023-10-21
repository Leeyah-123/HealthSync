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
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const steps = [
  { title: 'First', description: 'Workout Info' },
  { title: 'Second', description: 'More About You' },
  { title: 'Third', description: 'Select/Create routine' },
];

const WorkoutPlanOverview = () => {
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
        <div>
          {activeStep === 1 && <div>Step 1</div>}
          {activeStep === 2 && <div>Step 2</div>}
          {activeStep === 3 && <div>Step 3</div>}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlanOverview;
