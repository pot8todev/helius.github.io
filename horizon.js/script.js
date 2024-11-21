// window.alert('Minha primeira mensagem!');
// window.confirm('esta certo que quer prossegir?');
//var nome = window.prompt('qual é o seu nome?');
// window.alert('prazer, ' + nome)
function myfunc(event){
    event.preventDefault();

    var Name = document.getElementById("Nome").value;
    var mail = document.getElementById("Email").value;
    var servico = document.getElementById("Servico").value;
    
    localStorage.setItem('ls_name', Name);
    localStorage.setItem('ls_mail', mail);
    localStorage.setItem('ls_serviço', servico);
}
function block(event){
    
   
}