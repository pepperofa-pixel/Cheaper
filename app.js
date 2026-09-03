const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const uploadButton = document.getElementById("uploadButton");
const pasteButton = document.getElementById("pasteButton");
const message = document.getElementById("message");


// SEARCH
searchButton.addEventListener("click", () => {
  const input = searchInput.value.trim();

  if (!input) {
    message.textContent = "Enter a clothing item or paste a product link.";
    return;
  }

  // Save the search so the results page knows what was searched
  localStorage.setItem("cheaperSearch", input);

  // Go to results page
  window.location.href = "results.html";
});


// PRESS ENTER TO SEARCH
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchButton.click();
  }
});


// PASTE LINK
pasteButton.addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();

    if (text) {
      searchInput.value = text;
      message.textContent = "Link pasted! Click “Find it cheaper.”";
    } else {
      searchInput.focus();
    }
  } catch (error) {
    searchInput.focus();
  }
});


// PHOTO UPLOAD
uploadButton.addEventListener("click", () => {

  const fileInput = document.createElement("input");

  fileInput.type = "file";
  fileInput.accept = "image/*";

  fileInput.addEventListener("change", () => {

    if (fileInput.files.length > 0) {

      const file = fileInput.files[0];

      localStorage.setItem("cheaperPhotoName", file.name);

      message.textContent =
        `Photo selected: ${file.name}`;

    }

  });

  fileInput.click();
});
