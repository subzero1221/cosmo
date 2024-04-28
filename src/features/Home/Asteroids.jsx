import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";
import { useContext } from "react";
import { AstronomyContext } from "../../Context";

const date = new Date().toISOString().split("T")[0];

function Asteroids({ data }) {
  const { state, dispatch } = useContext(AstronomyContext);

  const asteroids = data?.near_earth_objects[date];

  function handleNext() {
    if (state.AsteroidsNum < asteroids.length - 1) {
      dispatch({ type: "SET_ASTEROIDS_NUM", payload: state.AsteroidsNum + 1 });
    }
  }

  function handlePrev() {
    if (state.AsteroidsNum > 0) {
      dispatch({ type: "SET_ASTEROIDS_NUM", payload: state.AsteroidsNum - 1 });
    }
  }

  let n = state.AsteroidsNum;

  return (
    <div className="flex items-start justify-center p-4 space-x-2 rounded-lg">
      <button
        className="pr-32 mx-2 my-auto text-2xl text-gray-300 rounded-xl hover:text-cyan-700"
        onClick={handlePrev}
      >
        <HiChevronDoubleLeft />
      </button>
      <div className="flex flex-col items-start justify-start flex-grow flex-shrink w-64 space-y-4">
        <h2 className="w-full mb-4 text-2xl font-bold text-center">
          ☄️ Closest Objects Today
        </h2>
        <span className="">
          <strong>Asteroid:</strong> <p>{asteroids[n].name}</p>
        </span>
        <span>
          <strong>Diameter:</strong>{" "}
          <p className="">
            {asteroids[n].estimated_diameter.kilometers.estimated_diameter_max}
          </p>
        </span>
        <span>
          <strong>Hazardous:</strong>{" "}
          <p>
            {asteroids[n].is_potentially_hazardous_asteroid
              ? "potentially hazardous"
              : "Not hazardous"}
          </p>
        </span>
        <span>
          <strong>Approach date:</strong>{" "}
          <p>{asteroids[n].close_approach_data[0].close_approach_date_full}</p>
        </span>
        <span>
          <strong>Miss distance(km):</strong>{" "}
          <p>{asteroids[n].close_approach_data[0].miss_distance.kilometers}</p>
        </span>
        <span className="pr-4">
          <strong>Orbiting body:</strong>
          <p>{asteroids[n].close_approach_data[0].orbiting_body}</p>
        </span>
      </div>
      <button
        className="mx-2 my-auto text-2xl text-gray-300 hover:text-cyan-700"
        onClick={handleNext}
      >
        <HiChevronDoubleRight />
      </button>
    </div>
  );
}

export default Asteroids;
