export const getCabins = async () => {
  const res = await fetch("http://localhost:5000/api/cabins");
  if (!res.ok) throw new Error("Failed to fetch cabins");
  const data = res.json();
  return data;
};

export const deleteCabin = async (id) => {
  const res = await fetch(`http://localhost:5000/api/cabins/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete cabin");

  const data = await res.json();
  return data;
};

export const CreateCabin = async (formData) => {
  const res = await fetch(`http://localhost:5000/api/cabins`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  if (!res.ok) {
    // throw backend message
    throw new Error(data.message || "Failed to create cabin");
  }
  return data;
};
