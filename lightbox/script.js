
let lightbox = document.getElementById("lightbox");
let lightboxImage = document.getElementById("lightbox-image");
function openLightbox(src) {
  lightboxImage.src = src;
  lightbox.style.display = "flex";
}
function closeLightbox() {
  lightbox.style.display = "none";
}
let closeButton = document.getElementById("close-btn");
closeButton.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});
let galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach(function (item) {
  item.addEventListener("click", function () {
    openLightbox(item.src.replace("-thumbnail", ""));
  });
});