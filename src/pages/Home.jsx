import { useQuery } from "@tanstack/react-query";
import Asteroids from "../features/Home/Asteroids";
import ISS from "../features/Home/ISS";

import Pictureoftheday from "../features/Home/Pictureoftheday";
import RocketLauch from "../features/Home/RocketLauch";
import { getAsteroids } from "../services/getDataHomePage";
import Spinner from "../ui/Spinner";

function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["Asteroids"],
    queryFn: getAsteroids,
  });

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="flex flex-col w-full p-4 bg-gray-900">
      <div className="flex w-full mb-4">
        <div className="flex flex-col justify-between w-1/3 mx-auto text-lg text-white rounded-lg ">
          <Asteroids data={data} />
        </div>
        <Pictureoftheday />
      </div>
      <div className="">
        <ISS />
      </div>
      <RocketLauch />
    </div>
  );
}

export default Home;
