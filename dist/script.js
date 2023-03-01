"use strict";
const addBtn = document.querySelector("#addBtn");
const bookCard = document.querySelector("#bookCard");
const overlay = document.querySelector("#overlay");

let flag = false;
addBtn.addEventListener("click", () => {
  //   bookCard.style.opacity = "100";

  bookCard.classList.remove("hidden");
  bookCard.classList.add("absolute");
  overlay.classList.remove("hidden");

  flag = true;
});

function closeCard() {
  //   bookCard.style.opacity = "0";
  overlay.classList.add("hidden");
  bookCard.classList.add("hidden");
  flag = false;
}

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape" && flag == true) {
    closeCard();
  }
});

overlay.addEventListener("click", () => {
  closeCard();
});

// logic

const myLibrary = [];

const addBook = (ev) => {
  ev.preventDefault();
  let book = {
    title: document.querySelector("#title").value,
    author: document.querySelector("#author").value,
    pages: document.querySelector("#pages").value,
  };

  myLibrary.push(book);
  document.querySelector("form").reset();
  //display card function
  displayCards();
  //close cards function
  closeCard();
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submitBtn").addEventListener("click", addBook);
});
// removing book
function remove(a) {
  myLibrary.splice(a, 1);
  displayCards();
}

// display card function
function displayCards() {
  let j = 0;
  document.getElementById("cards").innerHTML = myLibrary
    .map((item) => {
      var { title, author, pages } = item;
      return `       <div
    class="mt-4 md:mt-0 flex items-center justify-center flex-col bg-blue-500 rounded-md h-80 w-56 shadow-md bg-opacity-50"
  >
    <h1 class="text-xl">${title}</h1>
    <h1 class="mt-2">${author}</h1>
    <h1 class="mt-2">${pages} pages</h1>
   
    <button onclick = "remove(${j++})"
      class="bg-red-500 w-[8rem] shadow-sm rounded-md mt-8 bg-opacity-60 hover:bg-opacity-80 duration-300"
    >
      REMOVE
    </button>
  </div>`;
    })
    .join("");
}
