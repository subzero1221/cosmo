import { useQuery } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";
import { getPictures } from "../../services/getPictures";
import { useState } from "react";

function Pictureoftheday() {
  const [more, setMore] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: ["pictures"],
    queryFn: getPictures,
  });

  return isLoading ? (
    <div className="flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <div className="flex flex-col justify-between w-1/2 mx-auto ml-4 text-white rounded-lg shadow-lg bg-opacity-60">
      <h1 className="pl-64 ">Todays Photo</h1>
      <img
        className="w-full h-full mx-auto mt-4 rounded-lg shadow-lg"
        src={data.url}
        alt="Pictudsf the day"
      />
      <p className="w-full mx-auto mt-4 border rounded bg-slate-500 text-md border-slate-600">
        {data.explanation.slice(0, more ? data.explanation.length : 100)}
        <button
          onClick={() => setMore((o) => !o)}
          className="pl-2 text-fuchsia-500"
        >
          {!more ? "More..." : "less"}
        </button>
      </p>
    </div>
  );
}

export default Pictureoftheday;
