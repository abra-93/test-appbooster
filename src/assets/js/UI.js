"use strict";

// image
require("../img/trash.png");
require("../img/reload.png");
require("../img/rocket.png");
require("../img/arrow.png");
require("../img/ok.png");
require("../img/right-arrow.png");
require("../img/star.png");
require("../img/star-overflow.png");
require("../img/1.png");
require("../img/2.png");

const gradeFilter = document.querySelector(".js-grade-filter");
const title = document.querySelectorAll(".menu__title");
const stars = document.querySelectorAll(".js-star");
const accrd = document.querySelectorAll(".js-accordion");
let starArray = new Set();

title.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const btn = item.dataset.id;

    accrd.forEach((elem) => {
      if (btn === elem.getAttribute("data-id")) {
        elem.classList.toggle("show");
        item.children[3].style.transform = elem.classList.contains("show")
          ? "rotate(90deg)"
          : "";
      } else {
        elem.classList.remove("show");
      }
    });
  });
});

stars.forEach((star) => {
  star.addEventListener("click", (e) => {
    e.stopPropagation();
    let data = star.dataset.id;
    star.classList.toggle("_star-overflow");
    if (starArray.has(data)) {
      console.log(data);
      starArray.delete(data);
    } else {
      starArray.add(data);
    }
  });
});
