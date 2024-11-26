function toggleSidebar() {
    const sidebar = document.querySelector('.card-left');
    sidebar.classList.toggle('hidden');
  }

  
  function navigateTo(page) {
    const links = {
      'register-page': 'registro.html',          
      'admin-info-page': 'admin.html', 
      'all-employees-page': 'todos.html',       
      'employee-history-page': 'historico.html',
      'home-page': 'index.html',               
    };

    if (links[page]) {
      window.location.href = links[page];
    }
  }