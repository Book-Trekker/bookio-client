export const category = [
  "Adventure",
  "Romance",
  "Supplements",
  "Dresses",
  "Phone",
  "Gaming",
  "Networking",
];


export const Ratings = [5, 4, 3, 2, 1];

export const pageSizes = [12, 15, 20, 16];

export const sortFiltering = [
  { id: 1, name: "All" },
  { id: 2, name: "Newest", createdAt: -1 },
  { id: 2, name: "Oldest", createdAt: 1 },
  { id: 3, name: "Best Rating", ratings: 1 },
  { id: 4, name: "Most Popular", views: 1 },
  { id: 5, name: "Most Expensive", price: -1 },
  { id: 6, name: "Most Cheapest", price: 1 },
];
