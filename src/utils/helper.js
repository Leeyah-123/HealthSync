// gets current date
export const todayDate = () => {
  const currentDate = new Date();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Get the day, month, and year components
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // Format the date as "day MonthName year"
  return `${day} ${monthNames[monthIndex]} ${year}`;
};

// Wrapper function for API response
export const apiResponse = (success, message, data) => {
  if (Array.isArray(message)) message = message[0];
  return { success, message, data };
};
