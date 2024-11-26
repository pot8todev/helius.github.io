function toggleSidebar() {
    const sidebar = document.querySelector('.card-left');
    sidebar.classList.toggle('hidden');
  }

  function generateEmployeeID() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const id = `${letters[Math.floor(Math.random() * 26)]}${letters[Math.floor(Math.random() * 26)]}${Math.floor(
      100 + Math.random() * 900
    )}`;
    document.getElementById('generated-id').textContent = `ID do funcionário: ${id}`;
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');
  }

  function resetForm() {
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('confirmation').classList.add('hidden');
    document.getElementById('generated-id').textContent = '';
    document.querySelectorAll('.input').forEach(input => (input.value = ''));
  }

  function navigateTo(page) {
    const links = {
      'admin-page': 'admin.html',             
      'all-employees-page': 'todos.html',    
      'employee-history-page': 'historico.html', 
      'home-page': 'index.html',             
    };

    if (links[page]) {
      window.location.href = links[page];
    }
  }