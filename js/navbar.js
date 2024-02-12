const dropdownTrigger = document.querySelector(".navbar-dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownTrigger.addEventListener("mouseover", () => {
  dropdownContent.style.visibility = "visible";
});

dropdownContent.addEventListener("mouseleave", () => {
  dropdownContent.style.visibility = "hidden";
});

const gadgets = document.querySelectorAll(".dropdown-gadget");
const gadgetIcon = document.querySelectorAll(".dropdown-icon");

gadgets.forEach((gadget, i) => {
  let iconImg = gadget.getElementsByTagName("img");

  gadget.addEventListener("mouseover", () => {
    gadgetIcon[i].style.backgroundColor = "#0063ff";
    iconImg[0].style.filter = "invert(1)";
  });

  gadget.addEventListener("mouseleave", () => {
    gadgetIcon[i].style.backgroundColor = "#f8f9fa";
    iconImg[0].style.filter = "invert(0)";
  });
});
