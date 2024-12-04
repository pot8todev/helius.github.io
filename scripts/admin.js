let currentUser = localStorage.getItem("adminUser");
let currentPassword = localStorage.getItem("adminPassword");

function saveCredentials() {
  localStorage.setItem("adminUser", currentUser);
  localStorage.setItem("adminPassword", currentPassword);
}

function updateCredentials() {
  const newUser = document.getElementById("new-user").value;
  const newPassword = document.getElementById("new-password").value;

  if (newUser.trim() !== "" && newPassword.trim() !== "") {
    currentUser = newUser;
    currentPassword = newPassword;
    saveCredentials(); 
    showInfoPage();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function showInfoPage() {
  currentUser = localStorage.getItem("adminUser");
  currentPassword = localStorage.getItem("adminPassword");

  document.getElementById("current-user").textContent = `Usuário atual: "${currentUser}"`;
  document.getElementById("current-password").textContent = `Senha atual: "${currentPassword}"`;

  document.getElementById("info-page").classList.remove("hidden");
  document.getElementById("update-page").classList.add("hidden");
}

function showUpdatePage() {
  document.getElementById("info-page").classList.add("hidden");
  document.getElementById("update-page").classList.remove("hidden");
}

function toggleSidebar() {
  const sidebar = document.querySelector(".card-left");
  sidebar.classList.toggle("hidden");
}

function navigateTo(page) {
  const links = {
    "register-page": "registro.html",
    "all-employees-page": "todos.html",
    "employee-history-page": "historico.html",
    "home-page": "index.html",
  };

  if (links[page]) {
    window.location.href = links[page];
  }
}

window.onload = () => {
  if (!localStorage.getItem("adminUser") || !localStorage.getItem("adminPassword")) {
    saveCredentials(); 
  }
  showInfoPage(); 
};

