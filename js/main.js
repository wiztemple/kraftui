// const tabs = document.querySelectorAll(".auto-tab");
const tabs = document.querySelectorAll(".icon-btn");
const tabContents = document.querySelectorAll(".tab-body");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].className = "tab-body";
    }
    document.getElementById(this.dataset.id).className = "tab-body active";
  });
}
