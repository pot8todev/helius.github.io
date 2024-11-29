function goToConfirmation() {
    const smsCode = document.getElementById("sms-code").value;

    if (smsCode.trim() === "") {
      alert("Por favor, insira o código recebido por SMS.");
    } else {
      window.location.href = "confirmacao.html";
    }
  }