//page caller - universal caller
const additionalSmallContent = document.getElementById("small__group");
const additionalLargeContent = document.getElementById("large__group");

// small group caller
const clickSmallWord = document.getElementById("small_group_caller");
clickSmallWord.addEventListener("click", function() {
  if (additionalSmallContent.style.display === "flex") {
    additionalSmallContent.style.display = "none";
    additionalLargeContent.style.display = "none"
  } else {
    additionalSmallContent.style.display = "flex";
    additionalLargeContent.style.display = "none";
  }
})

// large group caller
const clickLargeWord = document.getElementById("large_group_caller");
clickLargeWord.addEventListener("click", function() {
  if (additionalLargeContent.style.display === "flex") {
    additionalSmallContent.style.display = "none"
    additionalLargeContent.style.display = "none";
  } else {
    additionalLargeContent.style.display = "flex";
    additionalSmallContent.style.display = "none";
  }
})