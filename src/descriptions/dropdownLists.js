export const movieCategories = [
  {
    label: "Popular",
    link: "/movies/popular",
  },
  {
    label: "Upcoming",
    link: "/movies/upcoming",
  },
  {
    label: "Top Rated",
    link: "/movies/top",
  },
  {
    label: "Now playing",
    link: "/movies/now-playing",
  },
];
export const tvShowsCategories = [
  {
    label: "Popular",
    link: "/tv-series/popular",
  },
  {
    label: "Today in TV",
    link: "/tv-series/today",
  },
  {
    label: "On the air",
    link: "/tv-series/on-air",
  },
  {
    label: "Top Rated",
    link: "/tv-series/top",
  },
];
export const userDropdown = [
  {
    label: "My Account",
    link: "/profile",
  },
  {
    onClick: () => {
      localStorage.removeItem("user");
      window.location.href = "/";
    },
    label: "Sing out",
    link: "/",
  },
];
