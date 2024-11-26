function handleCheckin() {
    const id = document.getElementById("id-input").value.trim();
  
    if (!id) {
      alert("Por favor, insira um ID.");
      return;
    }

    window.location.href = "sms.html";
  }
  
  