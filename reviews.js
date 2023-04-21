const reviewsContainer = document.querySelector("#reviews");

function generateReviewCard(review) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("card-content")
  const name = document.createElement("h2");
  name.classList.add("card__name");
  const date = document.createElement("p");
  date.classList.add("card__date");
  const rating = document.createElement("p");
  rating.classList.add("card__rating");
  const text = document.createElement("p");
  text.classList.add("card__text");
  name.textContent = review.name;
  date.textContent = new Date(review.date).toLocaleDateString();
  rating.innerHTML = "&#9733".repeat(review.rating) + "&#9734".repeat(5 - review.rating);
  text.textContent = review.text;
  card.appendChild(name);
  card.appendChild(date);
  card.appendChild(rating);
  card.appendChild(text);
  reviewsContainer.appendChild(card);
}

function generateReviewCards() {
  console.log(reviewData)
  reviewsContainer.innerHTML = "";
  reviewData.forEach((review) => {
    generateReviewCard(review);
  });
}

const addReviewForm = document.querySelector("#add-review-form");
addReviewForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = addReviewForm.querySelector("#name").value;
  const date = addReviewForm.querySelector("#date").value;
  const rating = addReviewForm.querySelector("#rating").value;
  const text = addReviewForm.querySelector("#text").value;
  const newReview = { name, date, rating, text };
  reviewData.push(newReview);
  generateReviewCards();
  addReviewForm.reset();
});

generateReviewCards();
