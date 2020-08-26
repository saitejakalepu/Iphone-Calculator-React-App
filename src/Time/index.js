import React from 'react';

function Time() {
  const locale = 'en';
  const [today, setDate] = React.useState(new Date()); 
  React.useEffect(() => {
    const timer = setInterval(() => { // Creates an interval which will update the current data every minute
    // This will trigger a rerender every component that uses the useDate hook.
    setDate(new Date());
  }, 60 * 1000);
  return () => {
    clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
  }
}, []);

  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

  return (
    <div>
    {time}
    </div>
  );
}

export default Time;
