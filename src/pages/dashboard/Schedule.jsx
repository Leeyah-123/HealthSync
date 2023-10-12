import { useState, useCallback, useMemo } from "react";
import {
  Calendar,
  momentLocalizer,
  Views,
  DateLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Profile from "../../components/complex/dashboard/Profile";
import PropTypes from "prop-types";
const localizer = momentLocalizer(moment);

export default function Schedule() {
  const [myEvents, setEvents] = useState([]);

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt('New Health Goal');
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }]);
      }
    },
    [setEvents]
  );

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  );

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  );

  return (
    <main className="mt-14 mx-auto lg:mx-0 lg:mt-10 flex gap-8 justify-between w-[90%]">
      <div className="lg:self-center w-[100%] lg:w-[70%] h-screen">
        <Calendar
          defaultDate={defaultDate}
          defaultView={Views.WEEK}
          events={myEvents}
          localizer={localizer}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          startAccessor="start"
          endAccessor="end"
          scrollToTime={scrollToTime}
        />
      </div>
      <div className="hidden lg:block lg:w-[28%]">
        <Profile />
      </div>
    </main>
  );
}

Schedule.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
};
