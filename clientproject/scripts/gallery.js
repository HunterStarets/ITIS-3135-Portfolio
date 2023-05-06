document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("galleryContainer");
  const galleryModal = document.getElementById("galleryModal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  // Create gallery items
  for (let i = 1; i <= 16; i++) {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");
    galleryItem.innerHTML = `<img src="images/gallery-${i}.png" alt="Gallery Image ${i}" />`;
    galleryContainer.appendChild(galleryItem);
  }

  // Click event listener for each gallery item
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const imgSrc = event.target.src;
      modalImage.src = imgSrc;
      galleryModal.style.display = "block";
    });
  });

  // Close button event listener
  closeBtn.addEventListener("click", () => {
    galleryModal.style.display = "none";
  });

  // Click outside modal to close it
  galleryModal.addEventListener("click", (event) => {
    if (event.target == galleryModal) {
      galleryModal.style.display = "none";
    }
  });
});
