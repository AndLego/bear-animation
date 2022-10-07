const bear = document.querySelectorAll(".bear");
const reload = document.querySelector(".again");
const confetti = document.querySelector(".confetti-container");

let counter = 0;

bear.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.add("gone");
    counter += 1;
    if (counter == 4) {
      reload.classList.remove("inactive");
      confetti.classList.add("inactive");
    }
  });
});

reload.addEventListener("click", () => {
  location.reload();
});
