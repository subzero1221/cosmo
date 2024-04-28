const date = new Date().toISOString().split("T")[0];

export async function getAsteroids() {
  const res = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=X7mQeTy5IyAaZOWbJTTDbLxaWbxcfi4wYPCPQQRK`
  );
  return res.json();
}

export async function getMap() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2023-01-01&api_key=X7mQeTy5IyAaZOWbJTTDbLxaWbxcfi4wYPCPQQRK`
  );
  return res.json();
}

export async function getStationPosition() {
  const res = await fetch(`http://api.open-notify.org/iss-now.json`);
  const data = await res.json();
  return data;
}

export async function getReversedPosition(lat, lon) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
  );
  const data = await res.json();
  return data;
}

export function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export async function getRocketLauchData() {
  const res = await fetch("https://fdo.rocketlaunch.live/json/launches/next/1");

  return res.json();
}
