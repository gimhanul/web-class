const reviewTotalDisplay = document.querySelector("#reviews");
const returningUser = document.querySelector("#returning-user");
const user = document.querySelector("#user");

export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: boolean
) {
  const iconDisplay = isLoyalty ? "⭐" : "";
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
