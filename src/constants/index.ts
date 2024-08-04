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

export const resumeSummary = [
  {
    id: 1,
    name: "Business Management (8 years)",
    detail: [
      "Product management",
      "Project management",
      "Business analyst",
      "PMP in progress",
    ],
  },
  {
    id: 2,
    name: "Software Development (4 years)",
    detail: [
      "Python: Pandas Numpy Pytorch",
      "Javascript: React JS Next JS",
      "Database: Appwrite, SQL",
    ],
  },
];

export const resumeSoftware = [
  {
    id: 1,
    name: "Ngonapp",
    detail: [
      "Social media application to share photos of food and discover restaurants",
      "Tanstack Query for API data fetching and queries",
      "User authentication, relational database, infinite scroll",
    ],
    link: "http://ngonapp.com",
  },
  {
    id: 2,
    name: "Machine Learning & Neural Networks",
    detail: [
      "Develop & train models to make classifications and predictions",
      "Linear models, binary and multiclass classification, computer vision",
      "Determine the activation function, loss functions, and optimizers",
    ],
    link: "https://drive.google.com/drive/folders/18LZ0Y6KZRWOuVJgnmRl34JZW31yQK6Fb?usp=drive_link",
  },
  {
    id: 2,
    name: "Money Theory",
    detail: [
      "Business and financial consulting services website",
      "Appointment scheduling and payment processing widget",
      "Implemented interactive chat forum with api and database",
    ],
    link: "http://moneytheory.net",
  },
];
