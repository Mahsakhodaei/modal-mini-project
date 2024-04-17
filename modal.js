const showModalBtn = document.querySelector(".show-modal");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");

function closeModal() {
  backdrop.classList.add("hidden");
  modal.classList.add("hidden");
}
function showModal() {
  //backdrop , modal ==> remove hidden class
  backdrop.classList.remove("hidden");
  modal.classList.remove("hidden");
}

showModalBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
