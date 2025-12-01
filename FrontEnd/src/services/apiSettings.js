export const getSettingsApi = async () => {
  const res = await fetch("http://localhost:5000/api/settings");
  if (!res.ok) throw new Error("Failed to fetch settings");
  const data = res.json();
  return data;
};

export const updateSettingsApi = async (formdata) => {
  const res = await fetch(`http://localhost:5000/api/settings`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to update cabin");
  }

  return data;
};
