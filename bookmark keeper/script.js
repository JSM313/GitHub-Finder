const modal = document.querySelector("#modal");

const modalShow = document.querySelector("#show-modal");

const modalClose = document.querySelector("#close-modal");

const bookmarkForm = document.querySelector("#bookmark-form");

const websiteNameEl = document.querySelector("#website-name");

const websiteUrlEL = document.querySelector("#website-url");

const bookmarksContainer = document.querySelector("#bookmark-container");

// Function to dynamically add show modal class...

const showModal = () => {
  modal.classList.add("show-modal");
  websiteNameEl.focus(); // cursor will automatically jump to the section of website name.
};

// Modal event listener...
modalShow.addEventListener("click", showModal);

modalClose.addEventListener("click", () =>
  modal.classList.remove("show-modal")
);

window.addEventListener("click", (e) =>
  e.target === modal ? modal.classList.remove("show-modal") : false
);
