const toggleSwitch = document.querySelector(".theme-switch");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleSwitch.src = `../images/sun.svg`;
  }
  else {
    toggleSwitch.src = `../images/moon.svg`;
  }
}
else {
  toggleSwitch.src = `../images/sun.svg`;
}

toggleSwitch.addEventListener(
  "click",
  event => {
    console.log(event.target.checked)
    if (event.target.checked) {
      document.documentElement.setAttribute("data-theme", "light");
      toggleSwitch.src = `../images/moon.svg`;
      localStorage.setItem("theme", "light");
      event.target.checked = false;
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      toggleSwitch.src = `../images/sun.svg`;
      localStorage.setItem("theme", "dark");
      event.target.checked = true;
    }
  },
  false
);
