import { useQuery } from "@tanstack/react-query";
import { getEarthImage } from "../services/getDataEarthPage";
import Spinner from "../ui/Spinner";
import EarthMap from "./../features/Earth/EarthMap";

function Earth() {
  return (
    <div
      className="w-full h-screen"
      style={{ backgroundImage: `url(/earth.png)`, backgroundSize: "cover" }}
    >
      <EarthMap />
    </div>
  );
}

export default Earth;
