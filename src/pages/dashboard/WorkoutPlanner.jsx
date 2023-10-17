// import moment from 'moment';
// import PropTypes from 'prop-types';
// import { useCallback, useMemo, useState } from 'react';
// import {
//   Calendar,
//   DateLocalizer,
//   Views,
//   momentLocalizer,
// } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// const localizer = momentLocalizer(moment);

import WorkoutPlanOverview from '../../components/complex/dashboard/WorkoutPlanOverview';

// export default function WorkoutPlanner() {
//   const [myEvents, setEvents] = useState([]);

//   const handleSelectSlot = useCallback(
//     ({ start, end }) => {
//       const title = window.prompt('New Health Goal');
//       if (title) {
//         setEvents((prev) => [...prev, { start, end, title }]);
//       }
//     },
//     [setEvents]
//   );

//   const handleSelectEvent = useCallback(
//     (event) => window.alert(event.title),
//     []
//   );

//   const { defaultDate, scrollToTime } = useMemo(
//     () => ({
//       defaultDate: new Date(),
//       scrollToTime: new Date(1970, 1, 1, 6),
//     }),
//     []
//   );

//   return (
//     <main className="mt-14 mx-auto lg:mx-0 lg:mt-10 flex gap-8 justify-between w-[90%]">
//       <Calendar
//         defaultDate={defaultDate}
//         defaultView={Views.WEEK}
//         events={myEvents}
//         localizer={localizer}
//         onSelectEvent={handleSelectEvent}
//         onSelectSlot={handleSelectSlot}
//         selectable
//         startAccessor="start"
//         endAccessor="end"
//         scrollToTime={scrollToTime}
//       />
//     </main>
//   );
// }

// WorkoutPlanner.propTypes = {
//   localizer: PropTypes.instanceOf(DateLocalizer),
// };

const WorkoutPlanner = () => {
  return <WorkoutPlanOverview />;
};

export default WorkoutPlanner;
