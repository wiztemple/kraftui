const tabs = document.querySelectorAll(".auto-tab");
const tab = document.querySelectorAll(".icon-btn");
const tabContent = document.querySelectorAll(".tab-body");

function onTabClick(event) {
  // deactivate existing active tabs and panel

  for (let i = 0; i < tab.length; i++) {
    tab[i].classList.remove("active");
  }

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }

  // activate new tabs and panel
  event.target.classList.add("active");
  let classString = event.target.getAttribute("data-target");
  document
    .getElementById("tabcontainer")
    .getElementsByClassName(classString)[0]
    .classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", onTabClick, false);
}
