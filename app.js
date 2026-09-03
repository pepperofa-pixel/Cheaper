const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const uploadButton = document.getElementById("uploadButton");
const pasteButton = document.getElementById("pasteButton");
const message = document.getElementById("message");

const BACKEND_URL = "https://cheaper-backend.vercel.app";


// SEARCH
searchButton.addEventListener("click", async () => {
  const input = searchInput.value.trim();

  if (!input) {
    message.textContent = "Enter a clothing item or paste a product link.";
    return;
  }

  searchButton.disabled = true;
  searchButton.textContent = "Searching...";
  message.textContent = "CHEAPER is searching...";

  try {
    const response = await fetch(`${BACKEND_URL}/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: input
      })
    });

    if (!response.ok) {
      throw new Error("Search failed");
    }

    const data = await response.json();

    localStorage.setItem("cheaperSearch", data.query);

    window.location.href = "results.html";

  } catch (error) {
    console.error(error);
    message.textContent =
      "Something went wrong. Please try again.";
  }

  searchButton.disabled = false;
  searchButton.textContent = "Find it cheaper";
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
    message.textContent =
      "Paste your clothing link into the box above.";
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

      message.textContent =
        `Photo selected: ${file.name}`;
    }
  });

  fileInput.click();
});
