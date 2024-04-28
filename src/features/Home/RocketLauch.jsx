import { useQuery } from "@tanstack/react-query";
import { getRocketLauchData } from "../../services/getDataHomePage";
import RocketTimer from "./RocketTimer";
import { HiVideoCamera } from "react-icons/hi2";

function RocketLauch() {
  const { data } = useQuery({
    queryKey: ["rocketLauch"],
    queryFn: getRocketLauchData,
  });

  const result = data?.result[0];
  console.log(result);

  return (
    <div className="grid items-start grid-cols-3 gap-4 py-32">
      <img
        src="rocket.jpg"
        alt="rocket"
        className="col-span-1 rounded-lg shadow-lg"
      />
      <div className="col-span-2">
        <div className="pl-72">
          <h1 className="mb-4 text-2xl font-bold text-white">
            The nearest mission
          </h1>
          <span className="flex ml-20 text-white pl-96">
            Live Stream
            <a
              href={result?.quicktext.split("-")[3]}
              className="ml-1 text-2xl text-purple-600"
            >
              <HiVideoCamera />
            </a>
          </span>
        </div>
        {result && (
          <div className="pt-4 pr-48 text-white">
            <p>
              <strong>Rocket Name:</strong> {result.name}
            </p>
            <p>
              <strong>Launch Date:</strong> {result.date_str}
            </p>
            <p>
              <strong>Launch description:</strong> {result.launch_description}
            </p>
            <p>
              <strong>Mission description:</strong> {result.mission_description}
            </p>
            <p>
              <strong>Launch Location:</strong>{" "}
              {`${result.pad.location.country} - ${result.pad.location.statename}`}
            </p>
            <p>
              <strong>Provider:</strong> {result.provider.name}
            </p>
            <div className="mt-16 ml-64">
              <RocketTimer date={result.t0} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RocketLauch;
