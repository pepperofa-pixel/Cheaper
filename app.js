const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const uploadButton = document.getElementById("uploadButton");
const pasteButton = document.getElementById("pasteButton");
const message = document.getElementById("message");

searchButton.addEventListener("click", () => {
  const input = searchInput.value.trim();

  if (!input) {
    message.textContent = "Paste a clothing link or describe what you're looking for.";
    return;
  }

  if (input.startsWith("http://") || input.startsWith("https://")) {
    message.textContent =
      "Got it! CHEAPER received your clothing link. Real product searching is the next feature we'll connect.";
  } else {
    message.textContent =
      `CHEAPER received: "${input}". AI clothing search is coming next!`;
  }
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchButton.click();
  }
});

pasteButton.addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();

    if (text) {
      searchInput.value = text;
      message.textContent = "Link pasted! Click “Find it cheaper.”";
    } else {
      searchInput.focus();
      message.textContent = "Paste your clothing link into the box above.";
    }
  } catch (error) {
    searchInput.focus();
    message.textContent = "Paste your clothing link into the box above.";
  }
});

uploadButton.addEventListener("click", () => {
  message.textContent =
    "Photo search is coming next! 📸 We'll connect CHEAPER's AI to this button.";
});
