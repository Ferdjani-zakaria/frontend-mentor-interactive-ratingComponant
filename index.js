const ratingCard = document.getElementById("rating-card");
const thankCard = document.getElementById("thank-card");
const ratingValue = document.getElementById("rating");
const submitBtn = document.getElementById("submit-btn");
const cb1 = document.getElementById("cb-1");
const cb2 = document.getElementById("cb-2");
const cb3 = document.getElementById("cb-3");
const cb4 = document.getElementById("cb-4");
const cb5 = document.getElementById("cb-5");
const box = document.getElementsByClassName("checkbox");

let rating;

const check1 = (e) => {
  for (let i = 0; i < box.length; i++) {
    box[i].checked = false;
  }
  cb1.checked = true;
};
const check2 = (e) => {
  for (let i = 0; i < box.length; i++) {
    box[i].checked = false;
  }
  cb2.checked = true;
};
const check3 = (e) => {
  for (let i = 0; i < box.length; i++) {
    box[i].checked = false;
  }
  cb3.checked = true;
};
const check4 = (e) => {
  for (let i = 0; i < box.length; i++) {
    box[i].checked = false;
  }
  cb4.checked = true;
};
const check5 = (e) => {
  for (let i = 0; i < box.length; i++) {
    box[i].checked = false;
  }
  cb5.checked = true;
};

const rate = () => {
  if (cb1.checked === true) {
    rating = cb1.value;
    console.log(1);
  }
  if (cb2.checked === true) {
    rating = cb2.value;
  }
  if (cb3.checked === true) {
    rating = cb3.value;
  }
  if (cb4.checked === true) {
    rating = cb4.value;
  }
  if (cb5.checked === true) {
    rating = cb5.value;
  }
  return rating;
};

submitBtn.addEventListener("click", function (e) {
  ratingCard.style.display = "none";
  thankCard.style.height = "100%";
  thankCard.style.opacity = 1;
  thankCard.style.visibility = "visible";
  rate();
  ratingValue.innerText = `${rating}`;
  e.preventDefault();
});
