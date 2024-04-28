export async function getEarthImage() {
  const res = await fetch(`https://techport.nasa.gov/api/organizations`);
  return res.json();
}
