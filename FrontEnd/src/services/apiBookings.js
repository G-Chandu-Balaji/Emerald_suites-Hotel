export const getBookingsApi = async ({
  filter,
  sortBy,
  page,
  pageSize,
} = {}) => {
  let url = "http://localhost:5000/api/bookings";
  const params = new URLSearchParams();

  //Adding filter if present
  if (filter) {
    params.append("field", filter.field);
    params.append("value", filter.value);
  }

  //Adding sorting if present
  if (sortBy) {
    params.append("sortBy", sortBy);
  }

  // ✅ Pagination
  if (page) {
    params.append("page", page);
    params.append("limit", pageSize);
  }

  //final url
  url += `?${params.toString()}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch Bookings");
  const data = await res.json();
  return data;
};
