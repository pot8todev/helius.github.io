function setTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    document.getElementById("entry-time").textContent = `${hours}:${minutes}`;
  }

  function goToIndex() {
    window.location.href = "index.html";
  }

  window.onload = setTime;