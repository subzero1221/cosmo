export async function getPictures() {
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=X7mQeTy5IyAaZOWbJTTDbLxaWbxcfi4wYPCPQQRK"
  );
  return res.json();
}
