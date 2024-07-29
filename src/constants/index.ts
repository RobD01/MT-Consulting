export const sidebarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/shopping.svg",
    route: "/product",
    label: "Products",
  },
  {
    imgURL: "/assets/icons/gift.svg",
    route: "/sponsor",
    label: "Sponsor",
  },
];

export const bottombarLinks = sidebarLinks;

export const business = {
  name: "Money Theory",
  email: "moneytheory34@gmail.com",
  detail:
    "Business consulting, product management, and app development. Serving Orange County, CA for in-person services. Available for remote services as well",
  video: "https://www.youtube.com/embed/00i0E2b7ypk?si=Cyshe9jPOIa1FflH",
};

export const homeLinks = [
  {
    imgURL: "/assets/images/meeting.jpg",
    route: "/product",
    label: "Products & Services",
  },
  {
    imgURL: "/assets/images/sponsor.jpg",
    route: "/sponsor",
    label: "Become a Sponsor",
  },
];

export const homeInfo = [
  {
    id: 1,
    name: business.name,
  },
  {
    id: 2,
    video: true,
  },
];

export const sponsor = [
  {
    id: 1,
    imageUrl: "/assets/images/money theory.png",
    url: "https://www.patreon.com/moneytheory",
    title: "Money Theory Patreon",
    description:
      "Becoming a Patreon member will support the development of finance and investment research projects and the educational videos on Youtube",
  },
  {
    id: 2,
    imageUrl: "/assets/images/Ngon.png",
    url: "https://www.ngonapp.com",
    title: "Ngon",
    description: "Social media app for foodies and restaurants",
  },
  {
    id: 3,
    imageUrl: "/assets/images/youtube.png",
    url: "https://www.youtube.com/@moneytheory",
    title: "Money Theory Youtube",
    description: "Educational videos about finance and investment",
  },
];

export const product = [
  {
    id: 1,
    imageUrl: "/assets/images/abc.png",
    url: "https://www.amazon.com/dp/B08P9LD9L7?binding=paperback",
    title: "ABC to Vietnamese",
    description: "Children's book series to teach Vietnamese",
  },
  {
    id: 2,
    imageUrl: "/assets/images/beta.JPG",
    url: "https://www.amazon.com/dp/B0DBGBJRYY",
    title: "Beta and Correlation",
    description:
      "Volatility and correlation data for all 500 stocks in the S&P 500",
  },
];
