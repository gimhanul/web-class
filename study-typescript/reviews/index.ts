import { showReviewTotal, populateUser } from "./utils.ts";

const reviews: {
  name: string;
  stars: number | number;
  loyaltyUser: boolean;
  date: string;
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021"
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021"
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021"
  }
];

const ADMIN = 'admin';
const READ_ONLY = 'read-only';
enum Permissions {
  ADMIN, READ_ONLY
}

const you: {
  firstName: string;
  lastName: string;
  permissions: Permissions;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
} = {
  firstName: "Bobby",
  lastName: "Brown",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ["Florida-home", "Oman-flat", "Tokyo-bungalow"]
};

type Price = 25 | 30 | 45;
const properties: {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: string;
  isAvailable: boolean;
}[] = [
  {
    image: "https://avatars.githubusercontent.com/u/80656733?v=4",
    title: "Colomian Shack",
    price: 45,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Colombia"
    },
    contact: "marrywinkle@gmail.com",
    isAvailable: true
  },
  {
    image: "https://avatars.githubusercontent.com/u/101719968?s=200&v=4",
    title: "Polish Cottage",
    price: 34,
    location: {
      firstLine: "nb23",
      city: "Gdansk",
      code: 343903,
      country: "Poland"
    },
    contact: "gary@hotemail.com",
    isAvailable: false
  },
  {
    image: "https://avatars.githubusercontent.com/sookyoungwoo",
    title: "London Flat",
    price: 23,
    location: {
      firstLine: "flat15",
      city: "London",
      code: 35433,
      country: "United Kingdom"
    },
    contact: "andy@google.com",
    isAvailable: true
  }
];

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.firstName, you.isReturning);

const propertyContainer = document.querySelector(".properties");

for (let i = 0; i < properties.length; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = properties[i].title;
  const image = document.createElement('img');
  image.setAttribute('src', properties[i].image);
  card.appendChild(image);
  propertyContainer.appendChild(card);
}

const footer = document.querySelector(".footer");

let currentLocation: [string, string, number] = ['London', '11:11', 17];
footer?.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + ' ` '