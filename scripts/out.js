function setTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    document.getElementById("out-time").textContent = `${hours}:${minutes}`;
  }
  window.onload = setTime;