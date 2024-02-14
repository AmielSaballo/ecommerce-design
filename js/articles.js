const blog = "images/620d08005ae7bd10cda7ad66_Blog Image.png";
const blogs = [
  "images/61fa4fd439310c3222e142ba_Blog Image 2.png",
  "images/61fa50143a337b6520618374_Blog Image 9.png",
  "images/61fa503d384336649c7557ac_Blog Image 6.png",
  "images/623376b57925d763656caec2_Blog Image.png",
];

const blogImg = document.querySelector(".default-article-image");
const articles = document.querySelectorAll(".article-text");
const learn = document.querySelectorAll(".learn-more");

articles.forEach((article, i) => {
  article.addEventListener("mouseover", () => {
    learn[i].style.display = "block";

    blogImg.src = blogs[i];

    // blogImg[i + 1].classList.add("article-active");
    // blogImg[0].classList.remove("article-active");
  });

  article.addEventListener("mouseout", () => {
    learn[i].style.display = "none";

    blogImg.src = blog;

    // blogImg[i + 1].classList.remove("article-active");
    // blogImg[0].classList.add("article-active");
  });
});
