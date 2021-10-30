document.querySelector(".menu").addEventListener("click", function () {
    document.querySelector(".menu-category").classList.add("active");
    });
    document.querySelector(".menu-close").addEventListener("click", function () {
        document.querySelector(".menu-category").classList.remove("active");
        });

// product image switcher
let productImg = document.querySelector(".product-img");
let productImages = document.querySelectorAll(".product-smimg");
productImages.forEach((el) => {
  el.addEventListener("click", function () {
    for (let i = 0; i < productImages.length; i++) {
      productImages[i].style.border = "none";
    }
    let src = this.getAttribute("src");
    productImg.setAttribute("src", src);
    this.style.border = "1px solid #ffc107";
  });
});
