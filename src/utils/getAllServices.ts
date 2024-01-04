async function getAllServices() {
  const res = await fetch("http://localhost:4000/services", {
    next: { revalidate: 86400 },
  });
  return res.json();
}

export default getAllServices;
