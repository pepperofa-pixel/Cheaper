const searchButton = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");
const uploadButton = document.querySelector(".upload-button");
const pasteButton = document.querySelector(".text-button");

searchButton.addEventListener("click", () => {
  const search = searchInput.value.trim();

  if (!search) {
    alert("Tell CHEAPER what you're looking for!");
    return;
  }

  alert(`CHEAPER is ready to search for:\n\n${search}\n\nAI shopping search coming next!`);
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchButton.click();
  }
});

uploadButton.addEventListener("click", () => {
  alert("Photo upload is coming next! 📸");
});

pasteButton.addEventListener("click", () => {
  searchInput.focus();
  searchInput.placeholder = "Paste your clothing link here...";
});
