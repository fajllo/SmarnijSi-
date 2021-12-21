function showMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("rotate-45");
  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("hidden");
}

const menu = document.querySelector(".menu");

menu.addEventListener("click", showMenu);
