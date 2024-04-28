import useTimer from "../../services/useTimer";

function RocketTimer({ date }) {
  const { days, hours, minutes, seconds } = useTimer(date);

  return (
    <div>
      <h1 className="pl-10 mb-4 text-4xl font-bold text-purple-800">
        Countdown to Launch
      </h1>
      <div className="flex items-center justify-center w-full h-32 text-2xl font-bold text-white shadow-lg bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl">
        <div className="px-4">
          <p className="text-shadow">Days: {days.padStart(2, "0")}</p>
        </div>
        <div className="px-4">
          <p className="text-shadow">
            Hours: {hours.toString().padStart(2, "0")}
          </p>
        </div>
        <div className="px-4">
          <p className="text-shadow">
            Minutes: {minutes.toString().padStart(2, "0")}
          </p>
        </div>
        <div className="px-4">
          <p className="text-shadow">
            Seconds: {seconds.toString().padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RocketTimer;
