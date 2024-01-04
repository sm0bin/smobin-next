async function getAllServices() {
  const res = await fetch("http://localhost:4000/services");
  return res.json();
}

export default getAllServices;
