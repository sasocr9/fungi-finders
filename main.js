import { data } from "./data.js";

const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  const navOpened = navToggle.getAttribute("aria-expanded");

  if (navOpened === "false") {
    navToggle.setAttribute("aria-expanded", true);
  } else {
    navToggle.setAttribute("aria-expanded", false);
  }
});

const cardsHTML = data
  .map(
    (mushroom) => `
            <div class="card">
              <h3 class="card__title">${mushroom.name}</h3>
              <ul class="tag-list" role="list" aria-label="Mushroom Characteristics">
                <li data-edible="${mushroom.edible}">
                  <span class="visually-hidden">This mushroom is</span>
                  ${mushroom.edible}
                </li>
                <li data-season="${mushroom.season}">
                  <span class="visually-hidden"
                    >Best season to harvest this mushroom is</span
                  >${mushroom.season}
                </li>
                <p>${mushroom.description}</p>
              </ul>
              <div class="card__note">
                <strong>Important notes: </strong>
                ${mushroom.note}
              </div>
            </div>
`
  )
  .join("");

document.getElementById("cards").innerHTML = cardsHTML;

const resizeObserver = new ResizeObserver((entries) => {
  document.body.classList.add("resizing");

  requestAnimationFrame(() => {
    document.body.classList.remove("resizing");
  });
});


resizeObserver.observe(document.body);
