import {LoyaltyUser} from "./enums";

const reviewTotalDisplay = document.querySelector("#reviews") as HTMLHeadingElement;
const returningUser = document.querySelector("#returning-user") as HTMLSpanElement;
const user = document.querySelector("#user") as HTMLSpanElement;

export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: LoyaltyUser
) {
  const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    "review total " +
    value.toString() +
    " / last veiwed by " +
    reviewer +
    " " +
    iconDisplay;
}

export function populateUser(userName: string, isReturning: boolean) {
  if (isReturning) {
    returningUser.innerHTML = "back";
  }
  user.innerHTML = userName;
}

export function showDetails(
    authorityStatus: boolean | Permissions,
    element: HTMLDivElement,
    price: number
) {
  if (authorityStatus) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + "/night";
    element.appendChild(priceDisplay);
  }
}

function add(firstValue: number, secondValue: number):number {
  return firstValue + secondValue;
}
