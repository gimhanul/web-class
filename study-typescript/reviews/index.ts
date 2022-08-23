import {populateUser, showDetails, showReviewTotal} from './utils';
import {LoyaltyUser, Permissions} from "./enums";
import { Price, Country } from "./types";

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
  description?: string; // ? - optional
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021"
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021"
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
    description: "good!!!!!~~~"
  }
];

const you: {
  firstName: string;
  lastName: string;
  permissions: Permissions.ADMIN;
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

const properties: {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: Country;
  };
  contact: [number, string] | string;
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
    contact: [8210, "marrywinkle@gmail.com"],
    isAvailable: true
  },
  {
    image: "https://avatars.githubusercontent.com/u/101719968?s=200&v=4",
    title: "Polish Cottage",
    price: 30,
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
    price: 25,
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

const propertyContainer = document.querySelector(".properties") as HTMLDivElement;

for (let i = 0; i < properties.length; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = properties[i].title;
  const image = document.createElement('img');
  image.setAttribute('src', properties[i].image);
  card.appendChild(image);
  showDetails(you.permissions, card, properties[i].price)
  propertyContainer.appendChild(card);
}

const footer = document.querySelector(".footer") as HTMLDivElement;

let currentLocation: [string, string, number] = ['London', '11:11', 17];
footer?.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + ' ` '
