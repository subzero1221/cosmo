import { HiSquare2Stack } from "react-icons/hi2";
import {
  getFlagEmoji,
  getReversedPosition,
  getStationPosition,
} from "../../services/getDataHomePage";
import { useState } from "react";

function ISS() {
  const [issPosition, setIssPosition] = useState(0);

  async function handlePosition() {
    const response = await getStationPosition();
    const {
      iss_position: { latitude, longitude },
    } = response;
    const reversedPosition = await getReversedPosition(latitude, longitude);
    setIssPosition((p) => (p = reversedPosition));
  }

  return (
    <div className="flex flex-row items-center justify-center w-full h-screen ">
      <div className="flex items-center justify-center w-2/3 h-full">
        <img
          src="ISS.jpg"
          alt="ISS"
          className="max-h-full rounded-lg shadow-lg"
        />
      </div>
      <div className="w-1/3 h-full p-8 mt-8 text-white text-md text-bold">
        <h2 className="mb-4 text-2xl font-bold">
          International Space Station (ISS)
        </h2>
        <p>
          <span className="">
            The International Space Station (ISS) is a large space station
            assembled and maintained in low Earth orbit by a collaboration of
            five space agencies: NASA (United States), Roscosmos (Russia), JAXA
            (Japan), ESA (Europe), CSA (Canada), and their contractors. ISS is
            the largest space station ever built. Its primary purpose is
            performing microgravity and space environment experiments.
            Operationally the station is divided into two sections: the Russian
            Orbital Segment assembled by Roscosmos and the US Orbital Segment
            assembled by NASA, JAXA, ESA and CSA. A striking feature of the ISS
            is the Integrated Truss Structure, which connects the large solar
            panels and radiators to the pressurized modules. The pressurized
            modules are specialized for research, habitation, storage,
            spacecraft control and airlock functions. Visiting spacecraft dock
            to the station via its eight...
          </span>
          <a
            href="https://www.nasa.gov/international-space-station/"
            className="inline-block pt-1 ml-3 text-purple-600"
          >
            <HiSquare2Stack />
          </a>
        </p>
        <button
          className="w-32 mt-2 bg-purple-600 rounded-lg h-11"
          onClick={handlePosition}
        >
          Get position
        </button>
        {issPosition ? (
          <div className="h-40 mt-2 bg-purple-600 rounded-lg w-96">
            <p className="pl-2">
              <strong>Latitude: </strong>
              {issPosition?.latitude}
            </p>
            <p className="pl-2">
              <strong>Latitude: </strong>
              {issPosition?.longitude}
            </p>
            <p>
              <strong className="pl-2">Continent: </strong>
              {issPosition?.continent
                ? issPosition.continent
                : issPosition.localityInfo?.informative[0]?.name}
            </p>
            <p>
              <strong className="pl-2">Locality: </strong>
              {issPosition.locality}
            </p>
            <p>
              <strong className="pl-2">Country: </strong>
              {issPosition.countryName ? issPosition.countryName : ""}/
              {issPosition.countryName
                ? getFlagEmoji(issPosition.countryCode)
                : "-"}
            </p>
            <p>
              <strong className="pl-2">City: </strong>
              {issPosition.city ? issPosition.city : "-"}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ISS;
