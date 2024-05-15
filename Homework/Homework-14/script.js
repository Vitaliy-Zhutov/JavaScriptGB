document.addEventListener("DOMContentLoaded", function () {
    const imageBox = document.getElementById("box"); 
    const previousButton = document.getElementById("previous-btn"); 
    const nextButton = document.getElementById("next-btn"); 
    const navCat = document.querySelectorAll(".cat");
  
    let currentIndex = 3;
  
    function showImage(index) {
      const transformValue = -index * 100 + "%";
      imageBox.style.transform = "translateX(" + transformValue + ")";
    }
  
    function updatenavCat(index) {
      navCat.forEach((cat) => cat.classList.remove("active-cat"));
      navCat[index].classList.add("active-cat");
    }
  
    function previousImage() {
      currentIndex = (currentIndex - 1 + navCat.length) % navCat.length;
      showImage(currentIndex);
      updatenavCat(currentIndex);
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % navCat.length;
      showImage(currentIndex);
      updatenavCat(currentIndex);
    }
  
    function goToImage(index) {
      currentIndex = index;
      showImage(currentIndex);
      updatenavCat(currentIndex);
    }
  
    previousButton.addEventListener("click", previousImage);
    nextButton.addEventListener("click", nextImage);
  
    navCat.forEach((cat, index) => {
        cat.addEventListener("click", function () {
        goToImage(index);
      });
    });
  
    showImage(currentIndex);
    updatenavCat(currentIndex);
  
  });