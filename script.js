const tabBtns = document.querySelectorAll(".btn-tab");
const btnsContainer = document.querySelector(".tabs-btns");
const contents = document.querySelectorAll(".content-tab");

btnsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".btn-tab");

  if (!clicked) return;
  console.log(clicked);

  tabBtns.forEach((btn) => btn.classList.remove("btn-tab-active"));
  contents.forEach((content) => content.classList.remove("content-active"));
  clicked.classList.add("btn-tab-active");

  document
    .querySelector(`.content-tab-${clicked.dataset.tab}`)
    .classList.add("content-active");
});
