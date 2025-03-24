const API_URLS = {
  people: "https://swapi.dev/api/people",
  vehicles: "https://swapi.dev/api/vehicles",
  planets: "https://swapi.dev/api/planets"
};
let nextPageUrl = "";

//DOM elements
const contentText = document.querySelector(".content-text");
const loadMoreButton = document.getElementById("buttonLoadMore");

document.getElementById("navigation").addEventListener("click", (event) => {
  if (event.target.tagName !== "DIV") {
    return;
  }

  const tabs = document.getElementById("navigation").children;
  const tabsArray = Array.from(tabs);
  tabsArray.forEach(tab => {
    tab.classList.remove("active");
  });

  contentText.innerHTML = "";
  event.target.classList.add("active");
  const entityType = event.target.id;

  loadEntities(API_URLS[entityType])
    .then(data => {
      showEntities(data, entityType);
      document.querySelector(".content-wrapper").classList.remove("hidden");
      toggleLoadMoreButton(true);
    })
    .catch(error => console.error(error));
});

function loadEntities(url) {
  return fetch(url)
    .then(response => response.json())
    .then(parsedResponse => {
      nextPageUrl = parsedResponse.next;
      return parsedResponse.results;
    })
    .catch(error =>
      console.error(error));
}

function showEntities(data, entityType) {
  if (!nextPageUrl) {
    toggleLoadMoreButton(false);
  }

  const accordionList = contentText;

  const entityMapping = {
    people: [
      "birth_year",
      "eye_color",
      "gender",
      "hair_color",
      "height",
      "mass",
      "skin_color"],
    vehicles: [
      "cargo_capacity",
      "consumables",
      "cost_in_credits",
      "crew",
      "length",
      "manufacturer",
      "max_atmosphering_speed",
      "model",
      "passengers",
      "vehicle_class"],
    planets: [
      "climate",
      "diameter",
      "gravity",
      "orbital_period",
      "population",
      "rotation_period",
      "surface_water",
      "terrain"]
  };

  data.forEach((item) => {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    const accordionButton = document.createElement("button");
    accordionButton.classList.add("accordion-header");
    accordionButton.innerHTML = `
      <span>${item.name}</span>
      <svg class="accordion-arrow w-5 h-5 text-red-600 transition-transform transform"
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 9l-7 7-7-7"></path>
      </svg>
    `;

    const descriptionItem = document.createElement("div");
    descriptionItem.classList.add("description");

    entityMapping[entityType]?.forEach((key) => {
      if (item[key]) {
        descriptionItem.innerHTML += `<div><strong>${key.replaceAll("_", " ")}:</strong> ${item[key]}</div>`;
      }
    });

    accordionItem.appendChild(accordionButton);
    accordionItem.appendChild(descriptionItem);
    accordionList.appendChild(accordionItem);
  });
}

contentText.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  const description = event.target.nextElementSibling;
  const arrow = event.target.lastElementChild;

  if (description.style.maxHeight) {
    description.style.maxHeight = null;
    arrow.classList.remove("rotate-180");
  } else {
    description.style.maxHeight = description.scrollHeight + "px";
    arrow.classList.add("rotate-180");
  }
});

loadMoreButton.addEventListener("click", (event) => {
  const activeTab = document.querySelector("#navigation > .active");
  if (!activeTab || !nextPageUrl) {
    event.target.setAttribute("disabled", "");
    return;
  }

  const entityType = activeTab.id;
  loadEntities(nextPageUrl)
    .then(data => showEntities(data, entityType))
    .catch(error => console.error(error));

});

function toggleLoadMoreButton(enable) {
  if (enable) {
    loadMoreButton.removeAttribute("disabled");
  } else {
    loadMoreButton.setAttribute("disabled", "");
  }
}

