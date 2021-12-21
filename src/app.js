function showMenu() {
  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("hidden");
}

const menu = document.querySelector(".menu");

menu.addEventListener("click", showMenu);
