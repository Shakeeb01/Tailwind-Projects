// For Navbar Animation
const navbar = document.querySelector(".navbar-custom");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    document.getElementById("navSpan").style.color = "black";
    document.getElementById("navsvg").classList.add("svgcolor");
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
    document.getElementById("navSpan").style.color = "white";
    document.getElementById("navsvg").classList.remove("svgcolor");
    document.getElementById("navsvg").classList.remove("navsvg");
  }
});

// menu
const NavIcon = document.getElementById("NavIcon");
let Menu = document.getElementById("menu");
let check = 0;
NavIcon.addEventListener("click", function () {
  if (check == 0) {
    Menu.style.display = "block";
    check++;
  } else {
    Menu.style.display = "none";
    check = 0;
  }
});

// Icons
let leftIcon = document.getElementById("leftIcon");
let RightIcon = document.getElementById("rightIcon");
const Container = document.querySelector(".scroll-container");
Container.addEventListener("mouseenter", () => {
  leftIcon.style.opacity = "1";
  RightIcon.style.opacity = "1";
});
Container.addEventListener("mouseleave", () => {
  leftIcon.style.opacity = "0";
  RightIcon.style.opacity = "0";
});

// let newsLeftIcon = document.getElementById("newsLeftIcon");
// let newsRightIcon = document.getElementById("newsRightIcon");
// const News = document.querySelector(".news");
// News.addEventListener("mouseenter", () => {
//   newsLeftIcon.style.opacity = "1";
//   newsRightIcon.style.opacity = "1";
// });
// News.addEventListener("mouseleave", () => {
//   newsLeftIcon.style.opacity = "0";
//   newsRightIcon.style.opacity = "0";
// });

// Accordian.
let Num = 0;
let AccordianIcons = document.querySelectorAll("#AccordianIcon");
let Expandicons = document.querySelectorAll("#expandIcon");
AccordianIcons.forEach((Icon) => {
  Icon.addEventListener("click", function (e) {
    let Paragraph = Icon.childNodes[3];
    if (Num == 0) {
      Paragraph.style.display = "block";
      Num++;
    } else {
      Paragraph.style.display = "none";
      Num = 0;
    }
  });
});

let ExpandCheck = 0;
Expandicons.forEach((ExpandIcon) => {
  ExpandIcon.addEventListener("click", function () {
    if (ExpandCheck == 0) {
      ExpandIcon.innerHTML =
        ' <i class="fa-solid fa-minus" style="color: #FF2E63;font-size:20px "></i>';
      ExpandCheck++;
    } else {
      ExpandIcon.innerHTML =
        '<i class="fa-solid fa-plus" style="color: #FF2E63;font-size:20px"></i>';
      ExpandCheck = 0;
    }
  });
});


