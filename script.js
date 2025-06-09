function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const toggleBtnDesktop = document.getElementById("theme-toggle");
const toggleBtnMobile = document.getElementById("theme-toggle-mobile");

function updateIcons() {
  const isDark = document.body.classList.contains("dark-mode");
  const icon = isDark ? "☀️" : "🌙";
  toggleBtnDesktop.textContent = icon;
  toggleBtnMobile.textContent = icon;
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  updateIcons();
}

toggleBtnDesktop.addEventListener("click", toggleTheme);
toggleBtnMobile.addEventListener("click", toggleTheme);

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const aboutPic = document.getElementById("about-pic");
  const experiencePic = document.getElementById("experience-pic");

  if (document.body.classList.contains("dark-mode")) {
    aboutPic.src = "./assets/about-pic-white.png";
    experiencePic.src = "./assets/experience-white.png";
  } else {
    aboutPic.src = "./assets/about-pic.png";
    experiencePic.src = "./assets/experience.png";
  }
}
