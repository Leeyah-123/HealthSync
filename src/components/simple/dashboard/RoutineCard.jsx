import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';

const RoutineCard = ({ routine, setSelectedRoutine, selectedRoutine }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{routine.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{routine.description}</Text>
      </CardBody>
      <CardFooter>
        {routine.id === selectedRoutine ? (
          'Selected'
        ) : (
          <Button
            onClick={() => {
              setSelectedRoutine(routine.id);
            }}
          >
            Select
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default RoutineCard;
