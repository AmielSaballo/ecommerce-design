lazyImages = document.querySelectorAll("img");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute("data-src");

      // Replace the placeholder with the actual image source
      img.src = src;

      // Stop observing the image
      observer.unobserve(img);
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, options);

lazyImages.forEach((image) => {
  observer.observe(image);
});
