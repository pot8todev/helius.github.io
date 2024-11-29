function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const storedUser = localStorage.getItem("adminUser") || "admin";
    const storedPassword = localStorage.getItem("adminPassword") || "horizonadmin01!";
  
    if (username === storedUser && password === storedPassword) {
      window.location.href = "home.html";
    } else {
      alert("Usuário ou senha inválidos.");
    }
  }